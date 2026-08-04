# Project Glossary

| 术语 | 含义 |
|---|---|
| Origin | `Aafff623/fork-yu-ai-code-mother`，当前二开远程仓库 |
| Upstream | 原作者李鱼皮（liyupi）的原始项目远程，用于同步来源、历史与许可证信息 |
| Product root | `src/` 单体后端；`yu-ai-code-mother-frontend/` 前端；`yu-ai-code-mother-microservice/` 微服务；`sql/` 数据结构 |
| Main flow | 需求输入 → 类型路由 → 流式代码生成 → 文件工具 → 项目构建 → 预览/部署 → 历史记录 |
| Facade | `AiCodeGeneratorFacade` 生成门面 |
| LangGraph 工作流 | `CodeGenWorkflow` 节点编排（与单次 chat 区分） |
| Handoff | `docs/outputs/handoff/{theme}/` 覆盖式任务合同 |
| ADR | `docs/adr/` 架构决策记录 |
| README 预览壳 | 根 `preview-readme.*`，端口 4313；非产品站 |
| Showcase | 产品主链路真机截图（`assets/images/readme/showcase-*.png`） |
| Mock | 演示或降级数据；必须显式标注，不等同真实执行 |
| Secret | API Key、私钥、数据库口令等不得提交的运行凭据 |
