# Architecture Overview

## 系统定位

从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台。

## 主链路

```text
需求输入 → 类型路由 → 流式代码生成 → 文件工具 → 项目构建 → 预览/部署 → 历史记录
```

## 模块边界

- src/ 单体后端
- yu-ai-code-mother-frontend/ 前端
- yu-ai-code-mother-microservice/ 微服务实现
- sql/ 数据结构

## 技术栈

Spring Boot、Spring AI、LangGraph4j、Dubbo、Nacos、Redis、MySQL、Vue。

## 运行时依赖与失败模型

模型生成文件必须限制路径；工具消息和正文消息不能混淆；单体与微服务存在双实现；前端已有 string/number 类型债务。外部依赖不可用时，系统应返回明确失败或采用文档化的保守降级；不得产生看似成功但不可审计的结果。

## 变更检查表

- 公共模型或接口是否影响多个模块？
- 配置键、扫描路径、Mapper namespace 或 SPI 文件是否同步？
- 新增外部调用是否有超时、限流和错误语义？
- 日志是否避开凭据与个人数据？
- README、CONTEXT 和 ADR 是否仍与实现一致？
