# project-init · 本仓落地备忘

> 规范真相源：全局 skill `project-init`（`%USERPROFILE%\.agents\skills\project-init\SKILL.md`）。  
> 本文件只记录**本仓已采纳决策**与验收指针，不复制全文。

## 模式与默认

| 项 | 本仓取值 |
|---|---|
| 模式 | Full（老项目接手） |
| Issue tracker | 本地 `.scratch/<feature>/` |
| Triage | needs-triage / needs-info / ready-for-agent / ready-for-human / wontfix |
| CONTEXT | 单文档 `CONTEXT.md` + `docs/adr/` |
| Handoff | 覆盖式快照（场景 A） |
| 输出语气 | `docs/agents/voice.md` + humanizer 引用 |
| Preview 站 | 省略（单产品） |
| README 预览壳 | 端口 `4313` |

## Phase A / B 指针

| 产物 | 路径 |
|---|---|
| Cursor MDC ×5 | `.cursor/rules/` |
| 根入口 | `AGENTS.md` · `CLAUDE.md` · `CONTEXT.md` · `LANGUAGES.md` |
| Agent 流程 | `docs/agents/{workflow,deliver,archive,domain,issue-tracker,triage-labels,voice}.md` |
| 调研报告 | `docs/outputs/report/project-init/` |
| README 配图契约 | `docs/outputs/prd/readme-diagrams/` · `assets/images/readme/` |
| 分析 Canvas | `canvases/fork-yu-ai-code-mother-analysis.canvas.tsx` |

## 明确不纳入 init

- 沙箱路径 / 流式健壮性等业务 Java WIP（见 `docs/outputs/handoff/bugfix-sandbox-and-stream/`）
- Showcase 真机截图（功能就绪后 Playwright 续作）
