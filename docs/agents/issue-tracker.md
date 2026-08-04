# Issue tracker: Local Markdown

Issues 与功能级 PRD 草稿落在 `.scratch/`（project-init 全局默认）。

## Conventions

- 一功能一目录：`.scratch/<feature-slug>/`
- PRD 草稿：`.scratch/<feature-slug>/PRD.md`（定稿再迁到 `docs/outputs/prd/{theme}/`）
- 实现 Issue：`.scratch/<feature-slug>/issues/<NN>-<slug>.md`，从 `01` 编号
- Triage：文件顶部 `Status:` 行（取值见 `triage-labels.md`）
- 讨论追加到文末 `## Comments`

## When a skill says "publish to the issue tracker"

在 `.scratch/<feature-slug>/` 新建文件（目录不存在则创建）。

## When a skill says "fetch the relevant ticket"

读取给定路径；用户通常直接传路径或编号。

## Bug Issue 八段结构

问题描述 → 根因 → 复现（自动/手动）→ 关键代码位置 → 修复方向 → 接手 Agent 引导 → 验证 → 回归风险。

关闭条件：代码合并、验收通过、文档同步；环境阻塞不得用“无法复现”静默关闭。
