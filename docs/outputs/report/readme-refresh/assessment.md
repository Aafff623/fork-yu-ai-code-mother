# Repository Assessment · 2026-07-18

## 观察

仓库在继承上游后完成了二开身份迁移。原始 README 偏教学或营销叙事，协作资产缺少模块边界、验证和风险信息。

## 已确认事实

- 产品：从自然语言需求生成、预览、构建并部署 Web 应用的 AI 代码平台
- 技术：Spring Boot、Spring AI、LangGraph4j、Dubbo、Nacos、Redis、MySQL、Vue
- 模块：src/ 单体后端；yu-ai-code-mother-frontend/ 前端；yu-ai-code-mother-microservice/ 微服务实现；sql/ 数据结构
- 上游历史：893918c：微服务改造完成；前序提交依次拆分 AI、用户、应用和截图服务
- 当前重构提交：`8803537`

## 处理

README 采用“定位 → 边界/功能 → 快速开始 → 架构 → 模块 → 阅读顺序 → 维护者”的结构；保留 3:1 Banner 与 upstream 溯源。源码身份迁移到 threetwoa，删除营销导流，为核心路径补充职责和失败边界注释。

## 验收

身份与营销扫描、旧包目录扫描、密钥形态扫描、`git diff --check` 和可行的构建/测试。环境或既有类型债务单独记录，不伪装为通过。
