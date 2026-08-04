# AI Code Mother · Context

> 单一事实源：领域术语、硬约束、技术栈。备份见 `.scratch/context-backup-20260804.md`。  
> 调研来源：仓库代码 + `fork-yu-ai-code-mother-analysis.canvas.tsx`（加速 Full，2026-08-04）。

## 一句话定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台（fork：`liyupi/yu-ai-code-mother` → 包坐标 `com.threetwoa.yuaicodemother`）。

## 产品主链路

需求输入 → 类型路由（HTML / MULTI_FILE / VUE_PROJECT）→ 流式代码生成（SSE）→ 文件工具落盘 →（可选）LangGraph 编排 → 质量检查 / 构建 → 预览 / 部署 → 对话历史。

## 代码边界

| 路径 | 职责 |
|---|---|
| `src/main/` | 单体后端完整实现 |
| `yu-ai-code-mother-frontend/` | Vue 3 前端 |
| `yu-ai-code-mother-microservice/` | 7 模块微服务拆分 |
| `sql/` | 数据库脚本 |
| `grafana/` · `prometheus.yml` | 可观测性示例 |

### 微服务模块

`yu-ai-code-common` · `yu-ai-code-model` · `yu-ai-code-client` · `yu-ai-code-user` · `yu-ai-code-app` · `yu-ai-code-ai` · `yu-ai-code-screenshot`

### 单体关键包

| 包 | 职责 |
|---|---|
| `core/` | `AiCodeGeneratorFacade`、parser、saver、`VueProjectBuilder` |
| `ai/` | 模型服务、guardrail、tools、消息协议 |
| `langgraph4j/` | `CodeGenWorkflow`、node、state、concurrent |
| `controller/` | App / User / ChatHistory / Workflow / Static |
| `service/` | 应用与用户等领域服务 |
| `ratelimter/` | 限流 + AOP + Redisson |
| `monitor/` | AI 调用指标 |

## 技术栈（事实）

| 层 | 选型 | 备注 |
|---|---|---|
| 后端 | Spring Boot 3.5.4 / Java 21 | 默认端口 8123，`context-path` `/api` |
| AI | LangChain4j 1.1 + DashScope / DeepSeek | chat / streaming / reasoning / routing |
| 工作流 | LangGraph4j 1.6-rc2 + Studio | 节点图 + 质量检查重试 |
| 数据 | MySQL + MyBatis-Flex + Redis Session | Redisson 限流；Caffeine 本地缓存 |
| 周边 | Selenium 截图 · 腾讯云 COS · Prometheus/Grafana | 可选能力 |
| 微服务 | Dubbo 3.3 + Nacos + Spring Cloud Alibaba | user / app / ai / screenshot |
| 前端 | Vue 3.5 + Vite 7 + Ant Design Vue + Pinia + TS | openapi2ts · eslint · vue-tsc |
| 文档 API | Knife4j | 扫描 `yuaicodemother.controller` |

## 关键不变量

- 模型生成文件必须限制在应用工作目录（如 `vue_project_{appId}`）；路径规范化后拒绝越界（403）。
- 工具消息与正文消息不得混淆。
- 单体与微服务存在双实现：改生成/工具链路时两边同步或明确只改一侧并写 handoff。
- 身份标识使用 `threetwoa`；上游名称仅用于来源与许可证。
- 配置与凭据分离；仓库只保留 sample，禁止真实 Key 入库。
- 前端存在 string/number ID 类型债务【待确认具体统一策略】。

## 运行与验证

- 依赖：JDK 21、Node.js 20+、MySQL（库 `yu_ai_code_mother`）、Redis、模型 Key；可选 COS / Pexels / Selenium。
- 单体：`./mvnw spring-boot:run`
- 前端：`cd yu-ai-code-mother-frontend && npm i && npm run dev`
- 验证：`./mvnw test` · `npm run type-check && npm run build`
- README 预览壳：`python -m http.server 4313` → `http://127.0.0.1:4313/preview-readme.html`
- Agent 本地开发通常只需 MySQL/Redis/模型；完整微服务另需 Nacos/Dubbo。

## 当前事实

- `origin`：`Aafff623/fork-yu-ai-code-mother`；`upstream`：`liyupi/yu-ai-code-mother`。
- 进行中（未入本次 init）：沙箱路径与流式相关 bugfix 工作区改动；handoff 见 `docs/outputs/handoff/bugfix-sandbox-and-stream/`。
- LangGraph 依赖为 rc 版，API 稳定性【待确认】。

## 推荐阅读顺序

1. `README.md` — 产品与启动
2. 本文件 + `docs/agents/domain.md` + `LANGUAGES.md`
3. `core/` → `ai/` → `langgraph4j/` → `service/` / `controller/`
4. `yu-ai-code-mother-microservice/` 对照单体
5. `docs/adr/` · `docs/outputs/handoff/`
