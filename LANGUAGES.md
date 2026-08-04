# LANGUAGES.md

共享用词入口。领域定义以 `CONTEXT.md` 为准；此处只列 Agent 输出必须对齐的词。

## 文档与代码语言

- 文档默认简体中文；专业缩写首次出现给英文原文。
- 代码标识符、提交类型用英文；用户可见文案遵循既有界面语言。
- 新增/改动代码附中文注释。

## 产品与领域词

| 用词 | 含义 | 避免 |
|---|---|---|
| AI Code Mother | 本产品对外名称 | 用上游营销名指代本 fork 维护身份 |
| 单体 | `src/main/` 完整后端 | 与微服务混称“后端”而不指路径 |
| 微服务 | `yu-ai-code-mother-microservice/` 七模块 | 把单体改动说成微服务已同步 |
| 生成类型 | HTML / MULTI_FILE / VUE_PROJECT | 自造类型名 |
| Facade | `AiCodeGeneratorFacade` 生成门面 | 含糊称“AI 服务” |
| LangGraph 工作流 | `CodeGenWorkflow` 节点编排 | 与单次 chat 调用混为一谈 |
| 文件工具 | `ai/tools/*` 读写改删 | 绕过工具直接写任意路径 |
| 预览 / 部署 | Static 资源 + deployKey | 信任未规范化的用户路径 |
| SSE 流式 | 实时推送生成阶段消息 | 把工具消息当正文 |

## Issue / 任务流词汇

| 词 | 含义 |
|---|---|
| Issue | `.scratch/<feature>/` 下的任务文件 |
| PRD | `docs/outputs/prd/{theme}/prd.md` |
| handoff | `docs/outputs/handoff/{theme}/` 覆盖式交接快照 |
| commit-history | `docs/outputs/commit-history/{branch}/YYYY-MM-DD.md` |
| ADR | `docs/adr/000N-kebab-title.md` |
| needs-triage / needs-info / ready-for-agent / ready-for-human / wontfix | triage 五态 |

## Preview vs Showcase

| 词 | 含义 |
|---|---|
| README 预览壳 | 根目录 `preview-readme.{html,css,js}`，渲染 README 本身 |
| Preview 站 | 资产 Gallery（本仓为单产品应用，**省略**独立 Preview 站） |
| Showcase | 产品主链路真机截图（`assets/images/readme/showcase-*.png`，可占位） |
