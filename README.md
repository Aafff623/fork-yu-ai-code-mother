<p align="center">
  <h1 align="center">AI Code Mother</h1>
  <p align="center"><em>从自然语言需求到可预览应用的 AI 代码生成平台</em></p>
  <p align="center">围绕提示词增强、代码生成、文件落盘、实时预览和部署构建完整链路，并保留从单体到微服务的演进实现。</p>
</p>

<p align="center"><img src="assets/images/readme/banner.png" alt="AI Code Mother Banner" width="100%"></p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge" alt="Java 21">
  <img src="https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge" alt="Spring Boot">
  <img src="https://img.shields.io/badge/Vue-3-42B883?style=for-the-badge" alt="Vue 3">
  <img src="https://img.shields.io/badge/Maintainer-threetwoa-6366F1?style=for-the-badge" alt="Maintainer threetwoa">
</p>

<p align="center"><a href="#产品边界">产品边界</a> · <a href="#功能矩阵">功能矩阵</a> · <a href="#快速开始">快速开始</a> · <a href="#架构">架构</a> · <a href="#模块阅读顺序">模块阅读顺序</a></p>

> 基于 [liyupi/yu-ai-code-mother](https://github.com/liyupi/yu-ai-code-mother) 进行二次开发。上游版权和许可证声明继续有效；本分支的源码身份、包坐标与维护信息由 `threetwoa` 维护。

## 产品边界

| 组件 | 职责 | 关键边界 |
|---|---|---|
| 生成服务 | 将需求路由到 HTML、多文件或 Vue 生成链路 | 模型输出必须解析并校验后落盘 |
| LangGraph 工作流 | 编排路由、提示词增强、素材收集和项目构建 | 节点失败要保留可定位的上下文 |
| 预览与部署 | 提供生成物预览和部署入口 | 不信任用户生成的文件路径 |
| 用户与应用域 | 登录、应用、对话历史及权限 | 管理与所有者权限在服务端判定 |

## 功能矩阵

| 能力 | 实现位置 | 说明 |
|---|---|---|
| 多类型代码生成 | `ai/`、`core/` | HTML、多文件与 Vue 项目生成 |
| 工作流编排 | `langgraph4j/` | 路由、素材并行收集、构建与质量检查 |
| 工具系统 | `ai/tools/` | 文件读写、修改和目录操作 |
| 实时输出 | `controller/`、`ai/model/message/` | 通过流式消息报告生成阶段 |
| 单体后端 | `src/main/` | 完整业务实现与管理接口 |
| 微服务版本 | `yu-ai-code-mother-microservice/` | 用户、应用、网关及公共客户端拆分 |
| 前端 | `yu-ai-code-mother-frontend/` | Vue 3 应用创建、对话和预览界面 |

## 快速开始

要求：JDK 21、Node.js 20+、MySQL、Redis，以及模型服务配置。复制 sample 配置到本地环境后填写密钥，禁止提交真实凭证。

```bash
git clone https://github.com/Aafff623/fork-yu-ai-code-mother.git
cd fork-yu-ai-code-mother
./mvnw spring-boot:run
```

```bash
cd yu-ai-code-mother-frontend
npm install
npm run dev
```

## 架构

```text
Vue Client → Application API → Code Generation Facade
                                  ├─ Type Router
                                  ├─ Prompt Enhancer
                                  ├─ LangGraph Workflow
                                  ├─ Tool / File Workspace
                                  └─ Preview & Deployment
```

生成链路始终把模型输出视为不可信输入：限制工作目录、校验生成类型、处理解析失败，并通过明确消息区分请求、工具执行和最终结果。

## 模块阅读顺序

| 顺序 | 路径 | 阅读目的 |
|---|---|---|
| 1 | `src/main/java/com/threetwoa/yuaicodemother/core/` | 理解生成门面、解析与文件保存 |
| 2 | `src/main/java/com/threetwoa/yuaicodemother/ai/` | 理解模型接口、路由和工具协议 |
| 3 | `src/main/java/com/threetwoa/yuaicodemother/langgraph4j/` | 理解状态、节点和并发工作流 |
| 4 | `service/` 与 `controller/` | 理解应用、用户、对话和权限边界 |
| 5 | `yu-ai-code-mother-microservice/` | 对照单体理解服务拆分 |
| 6 | `yu-ai-code-mother-frontend/src/` | 理解生成对话与预览交互 |

## 开发与验证

```bash
./mvnw test
cd yu-ai-code-mother-frontend && npm run type-check && npm run build
```

上游同步时必须人工审查包坐标、Mapper namespace、扫描路径和品牌文案，避免回退 `com.threetwoa` 迁移。

## 维护者与许可

维护者：**threetwoa**。许可证以 [LICENSE](LICENSE) 及[上游仓库](https://github.com/liyupi/yu-ai-code-mother)声明为准。
