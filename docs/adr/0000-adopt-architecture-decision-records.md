# ADR-0000：采用 Architecture Decision Records

- 状态：Accepted
- 日期：2026-08-04
- 决策者：threetwoa

## 背景

fork 仓需持续同步上游并做二开；协议、包坐标、双实现边界等决策若只留在聊天中，后续 Agent 与人类无法对齐。

## 决策

1. 使用 `docs/adr/000N-kebab-title.md` 记录架构级决策。
2. 影响公共 API、数据模型、认证、部署拓扑、跨模块依赖的变更必须先有 ADR 或在同 PR 附 ADR。
3. ADR 状态至少包含：Proposed / Accepted / Superseded / Deprecated。

## 后果

优点：决策可检索、可回滚叙事。代价：小改也需判断是否“架构级”，XS 变更可免。
