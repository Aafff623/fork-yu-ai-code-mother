# ADR-0002：产物路径与资产目录对齐 project-init

- 状态：Accepted
- 日期：2026-08-04
- 决策者：threetwoa

## 背景

旧约定使用 `docs/output/`（单数）、根级 `docs/commit-history/`、`assets/theme/{ppt,script}/`，与现行 project-init 规范漂移。

## 决策

1. `docs/output/` → `docs/outputs/`（含 report / prd / handoff）。
2. commit 攒批 → `docs/outputs/commit-history/{branch}/`，已合并分支进 `archive/`。
3. `assets/theme/ppt` → `assets/ppt`；`assets/theme/script` → `assets/speeches`。
4. Issue tracker 默认本地 `.scratch/`；不再以 GitHub Issues 为唯一编号源（可并行使用，但 skill 消费以本地为准）。

## 后果

文档与 Agent 路径统一；旧链接需全局替换。进行中的业务 bugfix 工作区不纳入本 ADR 的代码范围。
