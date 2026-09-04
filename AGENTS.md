# AGENTS.md

## 定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台。fork 自 `liyupi/yu-ai-code-mother`，包坐标 `com.threetwoa.yuaicodemother`。领域事实与硬约束见 `CONTEXT.md`。

## 架构速览

- 单体主链路：SSE → `controller` → `AiCodeGeneratorFacade` → 按类型分流 `HTML` / `MULTI_FILE`（聚合后统一解析落盘）与 `VUE_PROJECT`（LangChain4j 工具调用逐步写文件）；可选 `langgraph4j/` 工作流编排（质检重试上限见 `CodeGenWorkflow.MAX_QUALITY_CHECK_RETRY`）。
- 微服务：`yu-ai-code-mother-microservice/` 下 7 模块独立聚合（common / model / client / user / app / ai / screenshot）。与单体是双实现，改核心链路须两侧同步或书面声明只改一侧。
- 模型生成的文件必须限制在 `vue_project_{appId}` 沙箱目录内（`BaseTool.resolveSafePath` 统一校验，越界拒绝）；静态资源访问同样归一化校验，越界 403。
- **警告**：`src/main/java/dev/langchain4j/` 下有 8 个与官方依赖同包名的遮蔽类（TokenStream、StreamingChatModel 等），是为适配 LC4j 1.1.0-beta7 的本地补丁。升级 LangChain4j 会被它们静默遮蔽，勿动勿删，升级前先逐一核对。

## 构建与验证

```bash
./mvnw compile -DskipTests          # 单体后端
cd yu-ai-code-mother-microservice && mvn compile -DskipTests   # 微服务（7 模块 reactor）
cd yu-ai-code-mother-frontend && npm run type-check && npm run build   # 前端
```

改了代码就要用真实构建/运行结果验收，不能只说"写完了"。

## 约定

- `temp/` 是本地工作区，不入库；`.codegraph/` 不入库。
- 敏感配置不入库：`application-local.yml` 保持忽略；首次运行自建（仿 `src/main/resources/application-local-sample.yml`，生产仿 `application-prod-sample.yml`），数据源凭据用 `MYSQL_USERNAME` / `MYSQL_PASSWORD` 等环境变量注入。
- 停用语言与文案：注释解释职责、约束、失败行为与设计理由，新增/改动代码附中文注释。
- 禁止：提交密钥；把 mock 当生产事实；为"统一"合并职责不同的单体/微服务双实现。

## 改动边界

- 允许：修复、测试、文档、可验证的小步重构。
- 需先讨论并记录（ADR）：协议、库表、公共 API、跨模块依赖、认证授权、部署拓扑。
- 破坏生产接口、持久化数据、外部契约的改动，先说明影响并确认。
