# CONTEXT.md

> 单一事实源：领域事实、硬约束、技术栈、backlog。所有内容以代码为准验证过（2026-09-05）。

## 定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台。fork 自 `liyupi/yu-ai-code-mother`，包坐标 `com.threetwoa.yuaicodemother`。origin：`Aafff623/fork-yu-ai-code-mother`。

## 主链路

需求输入 → 类型路由（HTML / MULTI_FILE / VUE_PROJECT）→ 流式代码生成（SSE）→ 文件工具落盘 →（可选）LangGraph 工作流编排 → 质量检查 / 构建 → 预览 / 部署 → 对话历史。

代码路径：`controller` → `core.AiCodeGeneratorFacade`。HTML / MULTI_FILE 走 `processCodeStream`（聚合完整响应后统一解析落盘）；VUE_PROJECT 走 `processTokenStream`（工具调用逐步写文件，完成后 `VueProjectBuilder` 构建）。

## 模块边界

| 路径 | 职责 |
|---|---|
| `src/main/` | 单体后端完整实现 |
| `yu-ai-code-mother-frontend/` | Vue 3 前端 |
| `yu-ai-code-mother-microservice/` | 7 模块微服务：common / model / client / user / app / ai / screenshot |
| `sql/` | 数据库脚本 |
| `grafana/` · `prometheus.yml` | 可观测性示例 |
| `docs/adr/` · `docs/knowledge/` | 架构决策与速览 |

单体与微服务是双实现：`ai/tools/`、`StaticResourceController`、`AiCodeGeneratorFacade`、`JsonMessageStreamHandler` 两边各有一份，改核心链路须两侧同步或书面声明只改一侧。

## 技术栈（已验证）

| 层 | 选型 | 备注 |
|---|---|---|
| 后端 | Spring Boot 3.5.4 / Java 21 | 端口 8123，context-path `/api`，默认 profile `local` |
| AI | LangChain4j 1.1.0（core），starter / reactor / redis 社区包 1.1.0-beta7 | **锁定 beta7**：`src/main/java/dev/langchain4j/` 下 8 个同包名遮蔽类依赖该版本行为，升级即静默失效 |
| 工作流 | LangGraph4j 1.6.0-rc2 + Studio | 质检重试有上限（`CodeGenWorkflow.MAX_QUALITY_CHECK_RETRY = 2`） |
| 数据 | MySQL + MyBatis-Flex 2.21.1 + Redis Session | Redisson 限流；Caffeine 本地缓存 |
| 周边 | Selenium 截图 · 腾讯云 COS · Prometheus/Grafana | 可选 |
| 微服务 | Dubbo 3.3 + Nacos + Spring Cloud Alibaba | 完整运行另需 Nacos |
| 前端 | Vue 3.5 + Vite 7 + Ant Design Vue + Pinia + TS | openapi2ts · eslint · vue-tsc |

## 运行依赖

JDK 21、Node.js 20+、MySQL（库 `yu_ai_code_mother`）、Redis、模型 API Key。本地开发配置放 `application-local.yml`（不入库，自建时仿 `application-local-sample.yml`）；数据源凭据经 `MYSQL_USERNAME` / `MYSQL_PASSWORD` 环境变量注入，仓库中不留真实口令。

## 领域约束（硬性）

1. 模型给出的路径必须限制在沙箱目录 `tmp/code_output/vue_project_{appId}` 内：`BaseTool.resolveSafePath` 负责 normalize + `startsWith` 校验，绝对路径与 `../` 上跳抛 `SecurityException`；写/读/改/删工具把拒绝原因作为工具结果返回给模型。
2. 静态资源 `/static/{deployKey}/**` 同样先归一化再校验越界，越界返回 403（单体 + 微服务 `StaticResourceController`）。
3. 流式落盘失败必须以 `BusinessException` 传播为 SSE onError，禁止吞掉异常后正常 complete（`processCodeStream`）。
4. 工作流每次运行用雪花 ID `WorkflowContext.workflowRunId` 隔离生成目录，不得回退到硬编码 appId；质检失败重试超过 `MAX_QUALITY_CHECK_RETRY` 次后写 `errorMessage` 并走 `skip_build` 结束。
5. 工具消息与正文消息不得混淆；`JsonMessageStreamHandler` 对幻觉工具名与未知消息类型必须判空跳过。
6. 身份标识用 `threetwoa`；上游名称仅用于来源与许可证语境。

## 已知未修复 backlog

- `monitor/` 的 `MonitorContext` 基于 ThreadLocal，在 Reactor 异步链路存在跨请求串号风险，需 reactor Context 改造（本次未修）。
- `src/main/java/dev/langchain4j/` 8 个遮蔽类与官方库收敛策略未定，升级 LC4j 前必须逐一核对。
- 前端 string / number ID 类型债务，统一策略待定。
- 微服务与单体的双实现长期收敛方案待定。

## 待确认项

- LangGraph4j 1.6.0-rc2 为 rc 版，API 稳定性未确认。
- 历史遗留的 `*_0` 生成目录（旧硬编码 appId 产物）已无流程引用，可手动清理。
