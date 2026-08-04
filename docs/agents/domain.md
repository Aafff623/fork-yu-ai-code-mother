# Domain Docs

工程 skill 探索代码前如何消费领域文档。

## Before exploring, read these

- 根目录 **`CONTEXT.md`**
- **`docs/adr/`** — 触及区域的 ADR
- 共享用词：**`LANGUAGES.md`**

文件不存在时静默继续，不强制先建。

## File structure

Single-context：

```text
/
├── CONTEXT.md
├── LANGUAGES.md
├── docs/adr/
├── src/                                    ← 单体后端
├── yu-ai-code-mother-frontend/             ← 前端
└── yu-ai-code-mother-microservice/         ← 微服务
```

本仓**无** `CONTEXT-MAP.md`（非多 CONTEXT）。

## 产品目标与所有权

| 范围 | 职责 |
|---|---|
| `src/` | 单体后端 |
| `yu-ai-code-mother-frontend/` | 前端 |
| `yu-ai-code-mother-microservice/` | 微服务实现 |
| `sql/` | 数据结构 |

主链路：`需求输入 → 类型路由 → 流式代码生成 → 文件工具 → 项目构建 → 预览/部署 → 历史记录`

## 不变量

- 身份：`threetwoa`；上游名仅用于来源说明。
- 业务入口不得绕过权限、校验、协议或持久化边界。
- 外部服务失败须显式错误或保守降级。
- 配置与凭据分离。
- 生成文件路径必须沙箱化（见 `CONTEXT.md`）。

## Use the glossary's vocabulary

输出中的领域概念使用 `CONTEXT.md` / `LANGUAGES.md` 已定义词，不漂移同义替换。

## Flag ADR conflicts

与既有 ADR 冲突时显式写出，禁止静默覆盖。
