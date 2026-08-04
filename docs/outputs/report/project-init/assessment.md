# project-init 调研摘要（加速 Full）

日期：2026-08-04  
来源：`fork-yu-ai-code-mother-analysis.canvas.tsx` + 仓库探查（跳过 5-Agent 并行与 MiniMax）

## 结论

老项目已有部分 Agent 资产与 README 视觉系统，但路径与规范漂移（`docs/output`、旧 triage 标签、GitHub-only Issue、缺少 `.cursor/rules`）。本次 init 以对齐骨架与根入口为主，不改业务代码。

## 差距（已处理 / 遗留）

| 项 | 状态 |
|---|---|
| `.cursor/rules` 五份 MDC | 已同步 |
| `docs/outputs/*` 路径 | 已迁移 |
| 根 CONTEXT/AGENTS/LANGUAGES 充实 | 已覆盖写 |
| 本地 Issue + canonical triage | 已改 |
| ADR-0000 / 0002 | 已写 |
| MiniMax / 新配图 | 跳过（既有 6 张契约图保留） |
| Showcase 真机图 | 占位 |
| 沙箱/流式 bugfix 工作区 | **未纳入**，遗留业务 theme |
