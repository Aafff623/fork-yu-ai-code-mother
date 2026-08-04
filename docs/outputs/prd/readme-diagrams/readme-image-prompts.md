# README Image Prompts

> 执行层：可投喂 GPT / MiniMax 等 image 模型。  
> 细致 Review（2026-08-05）：六张契约图已存在 → **不再重生**；本文件保留补图规范。Showcase 用截图，禁止文生图伪造 UI。

## §0 全局规范

| 项 | 值 |
|---|---|
| 定位 | 从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台 |
| 视觉总调 | 深海墨蓝底、精密网格、玻璃面板、电光青主强调、电光蓝次强调 |
| 命名契约 | `assets/images/readme/{banner,features,architecture,tech-stack,workflow,structure}.png` |
| 禁止 | 水印、仿冒 Logo、密集小字、无关人物、伪造产品截图冒充 Showcase |
| 系统指令模板 | You are generating premium GitHub README diagrams for “AI Code Mother”. Deep navy, modular grid, glassmorphism, cyan/electric-blue accents. Crisp hierarchy, generous negative space, no watermark, no tiny illegible text, no people, no fake brand logos. |

## banner.png

- 比例：3:1 · README Header · **状态：已有，跳过重生**
- Prompt：Premium 3:1 GitHub README hero for “AI Code Mother”: natural-language prompt flowing into generated code panels and deployment icons; deep navy; cyan accents; glass UI; no watermark.

## features.png

- 比例：16:9 · 功能矩阵 · **已有**
- 节点：多类型生成 · LangGraph 编排 · 文件工具沙箱 · SSE 流式 · 单体/微服务 · Vue 工作台
- Prompt：Feature overview board for AI Code Mother showing six capability cards (HTML/MULTI_FILE/Vue generation, LangGraph workflow, sandboxed file tools, SSE streaming, monolith+microservice, Vue workspace) on deep navy grid.

## architecture.png

- 比例：16:9 · 架构 · **已有**
- 节点：Vue Workspace → Gateway/App Service → AI Workflow/Builder → User·Screenshot·DB
- Prompt：Four-layer architecture diagram, left-to-right unidirectional flow, explicit boundaries, caption “边界原则：调用方向单向 · 外部依赖显式 · 失败可观察 · 配置不携带凭据”.

## tech-stack.png

- 比例：16:9 · 技术栈 · **已有**
- 节点：Java 21 / Spring Boot 3.5 · LangChain4j · LangGraph4j · MySQL/Redis · Dubbo/Nacos · Vue 3 / Vite
- Prompt：Layered tech-stack infographic for AI Code Mother; correct names LangChain4j (not Spring AI); dark navy developer aesthetic.

## workflow.png

- 比例：16:9 · 主链路 · **已有**
- 节点：需求 → 路由 → SSE 生成 → 工具落盘 →（可选）LangGraph → 质检/构建 → 预览/部署
- Prompt：Horizontal product workflow with decision points for HTML / MULTI_FILE / VUE_PROJECT and quality-check retry.

## structure.png

- 比例：16:9 · 模块阅读 · **已有**（README 另有 Markdown 树直呈）
- 节点：`src/main` · `frontend` · `microservice` · `sql` · `docs` · `assets`
- Prompt：Repository map highlighting monolith backend, Vue frontend, seven microservice modules, docs/assets governance.

## preview-shell.png

- **省略**：本仓无资产 Gallery Preview 站。

## showcase-*.png

- `method: screenshot`（Playwright / 实机）
- 推荐路径：登录 → 创建应用 → 输入需求 → SSE 生成 → 预览/部署
- **禁止**用文生图伪造产品 UI。
