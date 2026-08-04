import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Table,
  Text,
  useHostTheme,
} from "cursor/canvas";

/**
 * AI Code Mother 分析 Canvas
 * 用于 project-init / 接手扫读：定位、栈、边界、风险与启动路径
 */
export default function ForkYuAiCodeMotherAnalysis() {
  const theme = useHostTheme();

  return (
    <Stack gap={20} style={{ padding: 20 }}>
      <Stack gap={8}>
        <Row gap={8} align="center" wrap>
          <H1>AI Code Mother</H1>
          <Pill tone="info">AI 代码生成平台</Pill>
          <Pill tone="neutral">fork · threetwoa</Pill>
        </Row>
        <Text tone="secondary">
          从自然语言需求生成、预览、构建并部署 Web 应用。本仓为
          liyupi/yu-ai-code-mother 的二次开发，包坐标 com.threetwoa.yuaicodemother。
        </Text>
        <Text tone="tertiary" size="small">
          仓库：yupi-pjt/fork-yu-ai-code-mother · 分析日 2026-08-05
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="Java 21" label="语言基线" />
        <Stat value="Boot 3.5" label="Spring Boot" />
        <Stat value="~154" label="单体 Java 类量级" />
        <Stat value="7" label="微服务模块" />
      </Grid>

      <Callout tone="info" title="一句话结论">
        完整「需求 → 生成 → 落盘 → 预览/部署」链路已齐；LangGraph4j
        负责编排增强；维护重点是沙箱边界、流式失败传播与单体/微服务双实现同步。
      </Callout>

      <Divider />

      <Stack gap={10}>
        <H2>1. 产品</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>能力矩阵</CardHeader>
            <CardBody>
              <Table
                headers={["能力", "说明", "边界"]}
                rows={[
                  ["多类型生成", "HTML / 多文件 / Vue 项目", "输出须解析校验后落盘"],
                  ["LangGraph 工作流", "素材、增强、路由、质检、构建", "节点失败须可定位"],
                  ["文件工具", "读写改删与目录操作", "限制在应用工作目录"],
                  ["预览与部署", "静态资源与 deployKey", "路径规范化，越界 403"],
                ]}
                rowTone={["info", "info", "warning", "success"]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>主链路</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text weight="semibold">
                  需求 → 类型路由 → 流式生成 → 工具落盘 → 质检/构建 → 预览/部署 → 历史
                </Text>
                <Text tone="secondary" size="small">
                  生成类型：HTML · MULTI_FILE · VUE_PROJECT。可选走 LangGraph
                  编排；SSE 推送阶段消息。
                </Text>
                <Row gap={6} wrap>
                  <Pill tone="success" size="sm">生成</Pill>
                  <Pill tone="success" size="sm">SSE</Pill>
                  <Pill tone="success" size="sm">LangGraph</Pill>
                  <Pill tone="success" size="sm">沙箱</Pill>
                  <Pill tone="success" size="sm">预览</Pill>
                  <Pill tone="success" size="sm">部署</Pill>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={10}>
        <H2>2. 技术栈</H2>
        <Table
          headers={["层", "选型", "备注"]}
          rows={[
            ["单体后端", "Spring Boot 3.5.4 / Java 21", "端口 8123 · context-path /api"],
            ["AI", "LangChain4j 1.1 + DashScope / DeepSeek", "chat / streaming / reasoning / routing"],
            ["工作流", "LangGraph4j 1.6-rc2 + Studio", "节点图 + 质检重试"],
            ["数据", "MySQL + MyBatis-Flex + Redis Session", "Redisson 限流 · Caffeine 缓存"],
            ["周边", "Selenium 截图 · 腾讯云 COS · Prometheus/Grafana", "可选能力"],
            ["微服务", "Dubbo 3.3 + Nacos + Spring Cloud Alibaba", "user / app / ai / screenshot"],
            ["前端", "Vue 3.5 + Vite 7 + Ant Design Vue + Pinia + TS", "openapi2ts · eslint · vue-tsc"],
            ["文档 API", "Knife4j", "扫描 yuaicodemother.controller"],
          ]}
        />
      </Stack>

      <Stack gap={10}>
        <H2>3. 仓库结构</H2>
        <Grid columns="1.2fr 1fr" gap={12}>
          <Card>
            <CardHeader>顶层目录</CardHeader>
            <CardBody>
              <Table
                headers={["路径", "职责"]}
                rows={[
                  ["src/main/", "单体后端完整实现"],
                  ["yu-ai-code-mother-frontend/", "Vue 工作台"],
                  ["yu-ai-code-mother-microservice/", "七模块微服务"],
                  ["sql/", "数据库脚本"],
                  ["grafana/ · prometheus.yml", "可观测性示例"],
                  ["docs/", "Agent 流程 · ADR · handoff"],
                  ["assets/", "README 契约配图"],
                  ["canvases/", "分析 Canvas"],
                ]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>微服务模块</CardHeader>
            <CardBody>
              <Table
                headers={["模块", "职责"]}
                rows={[
                  ["yu-ai-code-common", "公共能力"],
                  ["yu-ai-code-model", "共享模型"],
                  ["yu-ai-code-client", "RPC 客户端"],
                  ["yu-ai-code-user", "用户域"],
                  ["yu-ai-code-app", "应用 / 生成 / 预览"],
                  ["yu-ai-code-ai", "AI 与工具"],
                  ["yu-ai-code-screenshot", "截图服务"],
                ]}
              />
            </CardBody>
          </Card>
        </Grid>
        <Card>
          <CardHeader>单体关键包</CardHeader>
          <CardBody>
            <Table
              headers={["包", "职责"]}
              rows={[
                ["core/", "AiCodeGeneratorFacade · parser · saver · VueProjectBuilder"],
                ["ai/", "模型服务 · guardrail · tools · 消息协议"],
                ["langgraph4j/", "CodeGenWorkflow · node · state · concurrent"],
                ["controller/", "App / User / ChatHistory / Workflow / Static"],
                ["service/", "应用与用户等领域服务"],
                ["ratelimter/", "限流 + AOP + Redisson"],
                ["monitor/", "AI 调用指标"],
              ]}
            />
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={10}>
        <H2>4. 关键路径</H2>
        <Table
          headers={["主题", "入口", "要点"]}
          rows={[
            [
              "生成门面",
              "AiCodeGeneratorFacade",
              "类型路由、解析落盘；Vue TokenStream；流式失败须传给客户端",
            ],
            [
              "工作流",
              "CodeGenWorkflow",
              "image_collector → prompt_enhancer → router → code_generator → quality_check → builder",
            ],
            [
              "文件沙箱",
              "ai/tools/* + BaseTool.resolveSafePath",
              "限制在 vue_project_{appId}；越界拒绝",
            ],
            [
              "静态预览",
              "StaticResourceController",
              "deployKey + resourcePath · normalize 后越界 403",
            ],
            [
              "应用 API",
              "AppController / AppServiceImpl",
              "SSE 生成与应用 CRUD",
            ],
            [
              "会话与权限",
              "User + ChatHistory + AOP",
              "Redis Session；管理/所有者权限服务端判定",
            ],
            [
              "限流与指标",
              "RateLimitAspect · AiModelMetricsCollector",
              "Redisson · Actuator/Prometheus",
            ],
            [
              "前端",
              "pages / stores / access.ts",
              "应用创建、对话、预览；注意 ID 类型债务",
            ],
          ]}
          rowTone={["info", "info", "warning", "success", "warning", "success", "neutral", "neutral"]}
        />
      </Stack>

      <Stack gap={10}>
        <H2>5. 架构草图</H2>
        <Card>
          <CardHeader trailing={<Pill size="sm">单向调用</Pill>}>
            分层边界
          </CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Text>
                Vue Client → Application API → Code Generation Facade
              </Text>
              <Text tone="secondary" size="small">
                Facade 下挂 Type Router · Prompt Enhancer · LangGraph Workflow · Tool /
                File Workspace · Preview & Deployment
              </Text>
              <Grid columns={3} gap={10}>
                <Stack gap={4}>
                  <H3>安全边界</H3>
                  <Text size="small" tone="secondary">
                    路径沙箱 + 静态资源规范化 + 配置不带凭据
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <H3>韧性</H3>
                  <Text size="small" tone="secondary">
                    质检重试上限 MAX_QUALITY_CHECK_RETRY=2；workflowRunId 隔离目录
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <H3>可观测</H3>
                  <Text size="small" tone="secondary">
                    限流、AI 指标、Prometheus/Grafana 示例
                  </Text>
                </Stack>
              </Grid>
            </Stack>
          </CardBody>
        </Card>
        <Callout tone="neutral" title="工作流分支">
          quality_check 后 build / skip_build / 失败回退 code_generator（受重试上限约束）。
        </Callout>
      </Stack>

      <Stack gap={10}>
        <H2>6. 启动与验证</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>依赖</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">JDK 21 · Node.js 20+</Text>
                <Text size="small">MySQL（库 yu_ai_code_mother）+ Redis</Text>
                <Text size="small">DeepSeek / DashScope 等模型 Key</Text>
                <Text size="small">可选 COS · Pexels · Selenium</Text>
                <Text size="small" tone="secondary">
                  复制 sample 到本地配置；禁止提交真实凭证
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>命令</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">单体</Text>
                <Text size="small">./mvnw spring-boot:run</Text>
                <Text size="small" weight="semibold">前端</Text>
                <Text size="small">
                  cd yu-ai-code-mother-frontend && npm i && npm run dev
                </Text>
                <Text size="small" weight="semibold">验证</Text>
                <Text size="small">
                  ./mvnw test · npm run type-check && npm run build
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="warning" title="Agent 本地提示">
          日常开发通常只需 MySQL/Redis/模型；完整微服务另需 Nacos/Dubbo。README 预览壳端口
          4313。
        </Callout>
      </Stack>

      <Stack gap={10}>
        <H2>7. 价值点</H2>
        <Grid columns={2} gap={12}>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">端到端生成链路</Text>
                <Text size="small" tone="secondary">
                  从提示词到可预览应用，适合二开与教学 SaaS 形态
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">LangGraph 编排</Text>
                <Text size="small" tone="secondary">
                  素材收集、增强、质检、构建可观察，便于 Agent 协作扩展
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">双形态代码</Text>
                <Text size="small" tone="secondary">
                  单体完整实现 + 微服务拆分，便于对照演进
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">治理资产</Text>
                <Text size="small" tone="secondary">
                  CONTEXT / ADR / handoff / commit-history 已对齐 project-init
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={10}>
        <H2>8. 风险与债</H2>
        <Table
          headers={["级别", "项", "说明 / 动作"]}
          rows={[
            [
              "高",
              "沙箱 / 路径穿越",
              "文件工具与静态预览须 resolveSafePath；见 bugfix handoff",
            ],
            [
              "中",
              "外部依赖耦合",
              "DeepSeek/DashScope/COS/Pexels/Selenium 需本地或 profile 降级",
            ],
            [
              "中",
              "前端 ID 类型债",
              "CONTEXT 标注 string/number 混用【待确认统一策略】",
            ],
            [
              "中",
              "流式失败静默",
              "落盘失败须 onError，避免客户端误判成功",
            ],
            [
              "低",
              "质检无限重试",
              "工作流应有最大重试；handoff 已设计上限",
            ],
            [
              "低",
              "LangGraph rc",
              "1.6.0-rc2 API 稳定性【待确认】",
            ],
            [
              "维护",
              "上游同步",
              "包坐标、Mapper namespace、扫描路径勿回退 com.threetwoa",
            ],
          ]}
          rowTone={["danger", "warning", "warning", "warning", "info", "info", "neutral"]}
        />
        <Text tone="tertiary" size="small">
          详见 docs/outputs/handoff/bugfix-sandbox-and-stream/fix-report.md · CONTEXT.md ·
          docs/knowledge/architecture-overview.md
        </Text>
      </Stack>

      <Divider />
      <Text tone="tertiary" size="small">
        本 Canvas 服务接手与 init Gate，不替代 IDE 调试。主题：
        {theme.kind === "dark" ? " Dark" : " Light"}。
      </Text>
    </Stack>
  );
}
