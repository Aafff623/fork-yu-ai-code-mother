# Handoff · 生成链路安全与健壮性修复

- 日期：2026-07-19
- 维护者：threetwoa
- 范围：单体 `src/` 与微服务 `yu-ai-code-mother-microservice/`（双实现同步修复，未合并职责）

## 问题清单

| # | 问题 | 严重度 | 影响面 |
|---|---|---|---|
| 1 | AI 文件工具沙箱可被绝对路径或 `../` 上跳绕过 | 高 | 单体 + 微服务 `ai/tools/` 全部 5 个文件工具 |
| 2 | 静态资源预览接口路径拼接无边界校验，可路径穿越读取任意文件 | 高 | 单体 + 微服务 `StaticResourceController` |
| 3 | HTML/多文件流式生成落盘失败被 `catch` 后仅打日志，客户端误认为成功 | 中 | 单体 + 微服务 `AiCodeGeneratorFacade.processCodeStream` |
| 4 | LangGraph 演示工作流硬编码 `appId=0L`，并发请求共享同一生成目录互相覆盖 | 中 | 仅单体 `CodeGeneratorNode` |
| 5 | 质检失败无条件回退重新生成，缺少最大重试次数，可能无限循环消耗模型调用 | 低 | 仅单体 `CodeGenWorkflow` |

## 变更明细

### 1. 文件工具沙箱（单体 + 微服务 `yu-ai-code-ai`）

- `BaseTool` 新增 `resolveSafePath(Long appId, String relativePath)`：
  - 以 `vue_project_{appId}` 项目根目录为沙箱，`resolve` 后 `normalize`，再用 `startsWith` 校验结果仍在根目录内；
  - 绝对路径与 `../` 上跳统一被拦截，越界抛 `SecurityException`。
- `FileWriteTool` / `FileReadTool` / `FileModifyTool` / `FileDeleteTool` / `FileDirReadTool` 全部改用该方法，删除各自手写的路径拼接；写/读/改/删四个工具显式捕获 `SecurityException` 并把拒绝原因作为工具结果返回给模型。

### 2. 静态资源路径穿越（单体 + 微服务 `yu-ai-code-app`）

- `StaticResourceController.serveStaticResource`：先把 `PREVIEW_ROOT_DIR` 归一化为绝对路径，再 `resolve(deployKey + resourcePath).normalize()`，越界返回 `403 FORBIDDEN`。

### 3. 落盘失败信号传播（单体 + 微服务 `yu-ai-code-app`）

- `AiCodeGeneratorFacade.processCodeStream` 的 `doOnComplete` 内解析/保存失败时改为记录完整堆栈后抛 `BusinessException`，由 Reactor 转成 `onError` 传给下游，前端 SSE 能感知失败而不是静默"成功"。

### 4. 工作流目录隔离（仅单体）

- `WorkflowContext` 新增 `workflowRunId`；`CodeGenWorkflow` 三个执行入口（同步 / Flux / SseEmitter）启动时用雪花 ID 填充；`CodeGeneratorNode` 用它替代硬编码的 `appId = 0L`。

### 5. 质检重试上限（仅单体）

- `WorkflowContext` 新增 `qualityCheckRetryCount`；`CodeGenWorkflow.routeAfterQualityCheck` 引入 `MAX_QUALITY_CHECK_RETRY = 2`，超限后写入 `errorMessage` 并走 `skip_build` 结束，不再无限回退。

## 验证

| 项 | 命令 | 结果 |
|---|---|---|
| 单体编译 | `.\mvnw.cmd compile -q -DskipTests` | 通过（exit 0） |
| 微服务全模块编译 | `mvn compile -q -DskipTests`（reactor 顺序构建 7 模块） | 通过（exit 0） |
| 空白检查 | `git diff --check` | 无告警 |
| Lint | IDE 诊断 | 仅微服务模块"不在当前工程 classpath"的固有提示，无语法错误 |

未运行项：`./mvnw test`（本次改动无对应单测覆盖，属测试缺口而非代码失败）；前端构建未涉及（本次无前端改动）。

## 风险与兼容性

- 沙箱校验会拒绝模型给出的绝对路径。上游 prompt 已要求模型使用相对路径，正常生成不受影响；若模型偶发输出绝对路径，工具会返回明确错误让模型自行纠正。
- `processCodeStream` 失败现在会触发 SSE 错误分支；前端 `AppChatPage.vue` 已有 `business-error` / `error` 处理逻辑，无需改动。
- 工作流 `appId` 从固定 `0L` 变为每次运行的雪花 ID：生成目录不再可预测复用，历史遗留的 `*_0` 目录不会被新流程引用，可手动清理。
- 质检重试上限 2 次是保守取值，如需调整改 `CodeGenWorkflow.MAX_QUALITY_CHECK_RETRY`。

## 回滚

所有变更为纯代码修改、无库表/配置/协议变动，`git revert` 对应提交即可整体回滚；也可按上面 5 项独立回滚，互相无依赖（第 4、5 项共用 `WorkflowContext` 新字段，需一起回滚）。
