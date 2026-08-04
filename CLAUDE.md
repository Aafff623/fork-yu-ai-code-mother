# CLAUDE.md

> **Output Style**: `humanizer-output-style` — see `~/.claude/skills/humanizer-output-style/SKILL.md`  
> **Windows Rules**: `.cursor/rules/windows-path-discipline.mdc` · `windows-shell-discipline.mdc`  
> **Answer Format**: `.cursor/rules/answer-format.mdc`  
> **硬约束入口**: 根 `AGENTS.md`（勿与本文件大段矛盾重复）

## 维护协议（三层加载）

1. **L0 根入口**：`AGENTS.md` · `CONTEXT.md` · `LANGUAGES.md` · 本文件  
2. **L1 Agent 流程**：`docs/agents/{workflow,deliver,archive,domain,issue-tracker,triage-labels,voice}.md`  
3. **L2 任务产物**：`docs/outputs/{report,prd,handoff,commit-history}/` · `docs/adr/`

禁止再维护 `docs/agents/language.md` / `docs/agents/context.md`。

## 偏好归档

- 维护者标识：`threetwoa`；上游仅在来源与许可证语境保留。
- README 预览：仓库根 `python -m http.server 4313` → `http://127.0.0.1:4313/preview-readme.html`。
- 优先小步修改；包名、Mapper namespace、SPI、扫描配置须同提交验证。
- 单体与微服务双实现：改核心链路时同步或书面声明范围。
- 输出语气：`docs/agents/voice.md`（覆盖全局 humanizer 的项目细则）。

## Agent skills

### Issue tracker

本地 Markdown：`.scratch/<feature>/`。见 `docs/agents/issue-tracker.md`。

### Triage labels

canonical 五标签。见 `docs/agents/triage-labels.md`。

### Domain docs

single-context：`CONTEXT.md` + `docs/adr/`。见 `docs/agents/domain.md`。
