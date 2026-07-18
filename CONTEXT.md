# AI Code Mother · Context

## 一句话定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台。

## 产品主链路

需求输入 → 类型路由 → 流式代码生成 → 文件工具 → 项目构建 → 预览/部署 → 历史记录。

## 代码边界

src/ 单体后端；yu-ai-code-mother-frontend/ 前端；yu-ai-code-mother-microservice/ 微服务实现；sql/ 数据结构。

## 技术与运行环境

Spring Boot、Spring AI、LangGraph4j、Dubbo、Nacos、Redis、MySQL、Vue。

## 当前事实

- 当前二开维护者为 `threetwoa`。
- `origin` 指向增强仓，`upstream` 指向原始项目。
- 最近二开提交 `8803537` 完成身份迁移、营销清理、核心注释和 README 重构。
- 上游里程碑：893918c：微服务改造完成；前序提交依次拆分 AI、用户、应用和截图服务。

## 关键风险

模型生成文件必须限制路径；工具消息和正文消息不能混淆；单体与微服务存在双实现；前端已有 string/number 类型债务。

## 推荐阅读顺序

1. README：产品定位与启动入口。
2. 本文件与 `docs/agents/domain.md`：边界和术语。
3. 入口模块与主链路服务。
4. 配置、持久化、测试和部署文件。
5. `docs/adr/` 与 `docs/output/handoff/`：决策和已交付变更。
