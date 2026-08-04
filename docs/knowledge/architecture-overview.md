# Architecture Overview

> 可迁移摘要。领域事实以根 `CONTEXT.md` 为准；本文件供快速扫读与答辩。

## 系统定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台（fork：`liyupi/yu-ai-code-mother` → `com.threetwoa.yuaicodemother`）。

## 主链路

```text
需求输入 → 类型路由（HTML / MULTI_FILE / VUE_PROJECT）
  → 流式代码生成（SSE）→ 文件工具落盘
  →（可选）LangGraph 编排 → 质量检查 / 构建
  → 预览 / 部署 → 对话历史
```

## 模块边界

| 路径 | 职责 |
|---|---|
| `src/main/` | 单体后端完整实现 |
| `yu-ai-code-mother-frontend/` | Vue 3 工作台 |
| `yu-ai-code-mother-microservice/` | 七模块微服务拆分 |
| `sql/` | 数据库脚本 |
| `docs/` · `assets/` | Agent 治理与 README 媒体 |

## 技术栈

Spring Boot 3.5 / Java 21、LangChain4j、LangGraph4j、MySQL、Redis、Dubbo、Nacos、Vue 3 / Vite；可观测性示例含 Prometheus / Grafana。

## 运行时依赖与失败模型

- 模型生成文件必须限制在应用工作目录；路径规范化后越界拒绝（403）。
- 工具消息与正文消息不得混淆。
- 单体与微服务双实现：改核心链路须同步或书面声明范围。
- 外部依赖不可用时返回明确失败或文档化降级；禁止“看似成功但不可审计”。

## 变更检查表

- 公共模型或接口是否影响多个模块？
- 配置键、扫描路径、Mapper namespace 或 SPI 是否同步？
- 新增外部调用是否有超时、限流和错误语义？
- 日志是否避开凭据与个人数据？
- README、CONTEXT 和 ADR 是否仍与实现一致？
