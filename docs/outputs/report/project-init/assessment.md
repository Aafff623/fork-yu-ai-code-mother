# project-init 细致 Review 验收（Full）

日期：2026-08-05  
对照：全局 skill `project-init`  
前置：加速版已于 `0c405c3` / `f70a5ab` push

## 全局默认（§2.2 A）

按全局默认：本地 `.scratch/` Issue · 五态 triage · 单 CONTEXT · Cursor MDC 必须同步。

## Phase A 验收

| 项 | 状态 | 证据 |
|---|---|---|
| `.cursor/rules` 五份 MDC · `alwaysApply` | ✅ | 与用户级 SHA256 一致 |
| `setup-matt-pocock-skills` 决策落盘 | ✅ | AGENTS/CLAUDE `## Agent skills` |
| 根 AGENTS / CLAUDE / CONTEXT / LANGUAGES | ✅ | humanizer + Windows + answer-format 引用齐 |
| CONTEXT-MAP | ⊘ | 单端，不建空壳 |
| `docs/agents` 无 language.md / context.md | ✅ | |
| `docs/agents/voice.md` | ✅ | 链 answer-format.mdc |
| ADR-0000 / 0001 / 0002 | ✅ | |
| `docs/outputs/{report,prd,handoff,commit-history}` | ✅ | 按需有产物 |
| `assets/` + README · 无 `docs/images/` · 无空 `.gitkeep` | ✅ | |
| Full 调研填充 CONTEXT | ✅ | Canvas + 代码事实；加速轮已写，本轮校正 knowledge |
| 密钥 / 本机绝对路径作唯一说明 | ✅ | |

## Phase B 验收

| 项 | 状态 | 证据 |
|---|---|---|
| README 结构 · 样式 · 无 `<details>` 折叠目录 | ✅ | |
| 六张契约图已引用 | ✅ | `assets/images/readme/` |
| MiniMax / GenerateImage 补缺图 | ⊘ | **无缺图**（六张齐全）；Showcase 须截图不生图 |
| `readme-diagram-brief` / `readme-image-prompts` | ✅ | 本轮补全契约表 |
| Preview 站 | ⊘ | README 已声明省略 |
| README 预览壳 | ✅ | 本轮升级 `__PREVIEW_README__` · 端口 4313 |
| Showcase 占位 | ✅ | 真机图待业务续作 |

## 本轮补齐清单

1. `preview-readme.{html,css,js}` 对齐 peer 规范（配置对象 · file:// 保护 · 页脚）
2. brief / prompts 补全资产表与 Showcase 截图约定
3. `docs/knowledge/architecture-overview.md` 纠正「Spring AI」→ LangChain4j
4. `docs/knowledge/project-init.md` 本仓决策备忘
5. 分析 Canvas 修复 UTF-8 中文并迁入 `canvases/`
6. README 许可表述：上游无独立 LICENSE 文件，改为链向上游仓库声明
7. commit-history `2026-08-05.md`

## 明确排除

工作区未提交的沙箱 / 流式相关 Java 改动（单体 + 微服务）**不**纳入本 commit；继续走 `bugfix-sandbox-and-stream` theme。

## Gate

Init 资产可 Review；允许开启 / 继续业务 theme（沙箱与流式修复）。Showcase 真机图不阻塞 Gate。
