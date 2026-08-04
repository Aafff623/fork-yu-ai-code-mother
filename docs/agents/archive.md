# Archive Policy

## 保留

- `docs/adr/`：仍影响当前系统的架构决策。
- `docs/outputs/commit-history/`：按分支组织的提交攒批摘要。
- `docs/outputs/handoff/`：已执行任务合同与交付证据。
- `docs/knowledge/`：可迁移、可复用的项目知识。

## 归档条件

主题已合并、验证记录完整且无待 Review 实现时，可归档临时报告。过期事实标日期与替代文档，不直接删决策链。  
特性分支合并后：将该分支目录移入 `docs/outputs/commit-history/archive/`。

## 不应归档

密钥、数据库快照、用户数据、依赖缓存、构建目录和聊天转录。
