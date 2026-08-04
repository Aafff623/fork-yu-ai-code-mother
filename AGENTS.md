# AGENTS.md

> **Output Style**: `humanizer-output-style` skill — 统一语气与去 AI 味。加载路径：`skills/humanizer-output-style/SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`  
> **Answer Format**: `.cursor/rules/answer-format.mdc`（含白话 Mermaid）  
> **Commit History**: `.cursor/rules/commit-history.mdc`  
> **项目规则镜像**: `.cursor/rules/AGENTS.mdc`

## 项目使命

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台。维护目标：上游能力可持续二开，来源 / 许可证 / 行为边界清晰。

## 开始任务前

1. 读 `CONTEXT.md`、`LANGUAGES.md`、`docs/agents/domain.md`。
2. `git status --short` 确认工作区；不得覆盖用户未提交改动。
3. 产品层根：`src/` 单体后端；`yu-ai-code-mother-frontend/` 前端；`yu-ai-code-mother-microservice/` 微服务；`sql/` 数据结构。
4. 功能变更先落本地 Issue（`.scratch/<feature>/`）；跨模块决策先写 ADR。
5. 外部服务配置只用环境变量 / 本地未跟踪文件，不提交凭据。

## 变更边界

- 允许：修复、测试、文档、可验证重构、已批准业务功能。
- 需 ADR：协议、库表、公共 API、跨模块依赖、认证授权、部署拓扑。
- 禁止：改第三方许可证；mock 当生产事实；提交密钥；为“统一”合并职责不同的双实现。
- 注释解释职责、约束、失败行为与设计理由；新增/改动代码附中文注释。

## 任务流（摘要）

```text
Issue(.scratch) → report? → PRD → handoff → 实施 → Review → commit → commit-history
```

细则：`docs/agents/workflow.md` · `deliver.md` · `archive.md`。  
PRD 未批准不写功能代码；handoff 覆盖式更新（旧文件直接删除）。

## 验证

`单体 ./mvnw compile`；微服务目录 `mvn compile`；前端 `npm run build` / `npm run type-check`。

无法跑全量时，交付须区分：代码失败 / 依赖未装 / 外部服务未就绪。

## 交付路径

| 产物 | 路径 |
|---|---|
| Issue | `.scratch/<feature>/` |
| 调研 | `docs/outputs/report/{theme}/` |
| PRD | `docs/outputs/prd/{theme}/` |
| Handoff | `docs/outputs/handoff/{theme}/` |
| Commit 攒批 | `docs/outputs/commit-history/{branch}/` |

提交前：`git diff --check`；扫描身份残留、营销文案、密钥形态。

## Agent skills

### Issue tracker

本地 Markdown：Issues / PRD 在 `.scratch/<feature>/`。见 `docs/agents/issue-tracker.md`。

### Triage labels

五种 canonical：`needs-triage` / `needs-info` / `ready-for-agent` / `ready-for-human` / `wontfix`。见 `docs/agents/triage-labels.md`。

### Domain docs

单文档：`CONTEXT.md` + `docs/adr/`。见 `docs/agents/domain.md`。
