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
 * AI Code Mother ???? Canvas
 * ?????????????????????????????
 */
export default function ForkYuAiCodeMotherAnalysis() {
  const theme = useHostTheme();

  return (
    <Stack gap={20} style={{ padding: 20 }}>
      <Stack gap={8}>
        <Row gap={8} align="center" wrap>
          <H1>AI Code Mother</H1>
          <Pill tone="info">AI ??????</Pill>
          <Pill tone="neutral">fork � threetwoa</Pill>
        </Row>
        <Text tone="secondary">
          ???????????/??? Web ????????????????????????
          liyupi/yu-ai-code-mother ???????? com.threetwoa.yuaicodemother?
        </Text>
        <Text tone="tertiary" size="small">
          ??????D:\OneDrive\Desktop\project\yupi-pjt\fork-yu-ai-code-mother � ???
          2026-08-04
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="Java 21" label="?????" />
        <Stat value="Boot 3.5" label="?? Spring Boot" />
        <Stat value="~154" label="?? Java ??" />
        <Stat value="7" label="??????" />
      </Grid>

      <Callout tone="info" title="?????">
        ?????????????????????????????????????????LangGraph4j
        ????????????/??/???????
      </Callout>

      <Divider />

      <Stack gap={10}>
        <H2>1. ??</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>????</CardHeader>
            <CardBody>
              <Table
                headers={["??", "??", "????"]}
                rows={[
                  ["????", "?? HTML / ??? / Vue ??", "??????????"],
                  ["LangGraph ???", "??????????????", "???????????"],
                  ["?????", "??????????", "?????????"],
                  ["??????", "???????????", "??/??????????"],
                ]}
                rowTone={["info", "info", "warning", "success"]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>???</CardHeader>
            <CardBody>
              <Stack gap={8}>
                <Text weight="semibold">
                  ?? ? ???? ? ???? ? ???? ? ?? ? ??/?? ? ??
                </Text>
                <Text tone="secondary" size="small">
                  ?????HTML?MULTI_FILE?VUE_PROJECT?Vue
                  ??????????????????????
                </Text>
                <Row gap={6} wrap>
                  <Pill tone="success" size="sm">??</Pill>
                  <Pill tone="success" size="sm">?? SSE</Pill>
                  <Pill tone="success" size="sm">LangGraph</Pill>
                  <Pill tone="success" size="sm">????</Pill>
                  <Pill tone="success" size="sm">????</Pill>
                  <Pill tone="success" size="sm">????</Pill>
                </Row>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={10}>
        <H2>2. ???</H2>
        <Table
          headers={["??", "??", "??"]}
          rows={[
            ["????", "Spring Boot 3.5.4 / Java 21", "?? 8123?context-path /api"],
            ["AI", "LangChain4j 1.1 + DashScope / DeepSeek", "????chat / streaming / reasoning / routing"],
            ["???", "LangGraph4j 1.6-rc2 + Studio", "??? + ???????"],
            ["??", "MySQL + MyBatis-Flex + Redis Session", "Redisson ???Caffeine ????"],
            ["????", "Selenium ?? � ??? COS � Prometheus/Grafana", "?????????"],
            ["???", "Dubbo 3.3 + Nacos + Spring Cloud Alibaba", "user / app / ai / screenshot ??"],
            ["??", "Vue 3.5 + Vite 7 + Ant Design Vue + Pinia + TS", "openapi2ts?eslint?vue-tsc"],
            ["?? API", "Knife4j", "?? yuaicodemother.controller"],
          ]}
        />
      </Stack>

      <Stack gap={10}>
        <H2>3. ????</H2>
        <Grid columns="1.2fr 1fr" gap={12}>
          <Card>
            <CardHeader>????</CardHeader>
            <CardBody>
              <Table
                headers={["??", "??"]}
                rows={[
                  ["src/main/", "???????????"],
                  ["yu-ai-code-mother-frontend/", "??????????"],
                  ["yu-ai-code-mother-microservice/", "7 ????????"],
                  ["sql/", "????"],
                  ["grafana/ � prometheus.yml", "?????????"],
                  ["docs/", "???ADR?handoff"],
                  ["assets/", "README ????"],
                ]}
              />
            </CardBody>
          </Card>
          <Card>
            <CardHeader>?????</CardHeader>
            <CardBody>
              <Table
                headers={["??", "??"]}
                rows={[
                  ["yu-ai-code-common", "????"],
                  ["yu-ai-code-model", "????"],
                  ["yu-ai-code-client", "RPC ???"],
                  ["yu-ai-code-user", "????"],
                  ["yu-ai-code-app", "?? / ?? / ??"],
                  ["yu-ai-code-ai", "?????"],
                  ["yu-ai-code-screenshot", "????"],
                ]}
              />
            </CardBody>
          </Card>
        </Grid>
        <Card>
          <CardHeader>?????????</CardHeader>
          <CardBody>
            <Table
              headers={["?", "??"]}
              rows={[
                ["core/", "AiCodeGeneratorFacade?parser?saver?VueProjectBuilder"],
                ["ai/", "???????guardrail?tools???????"],
                ["langgraph4j/", "CodeGenWorkflow?node?state?concurrent"],
                ["controller/", "App / User / ChatHistory / Workflow / Static"],
                ["service/", "??????????????"],
                ["ratelimter/", "?? + AOP + Redisson"],
                ["monitor/", "AI ?????????"],
              ]}
            />
          </CardBody>
        </Card>
      </Stack>

      <Stack gap={10}>
        <H2>4. ????</H2>
        <Table
          headers={["??", "????", "??"]}
          rows={[
            [
              "????",
              "AiCodeGeneratorFacade",
              "????????????????Vue TokenStream ????/????",
            ],
            [
              "???",
              "CodeGenWorkflow",
              "image_collector?prompt_enhancer?router?code_generator?quality_check?builder",
            ],
            [
              "????",
              "ai/tools/* + BaseTool.resolveSafePath",
              "??????????? vue_project_{appId} ??",
            ],
            [
              "???",
              "AppController / AppServiceImpl",
              "SSE ????????????????? CRUD",
            ],
            [
              "????",
              "StaticResourceController",
              "deployKey + resourcePath?normalize ??? 403",
            ],
            [
              "?????",
              "User + ChatHistory + AOP ??",
              "Redis Session?????????????",
            ],
            [
              "?????",
              "RateLimitAspect � AiModelMetricsCollector",
              "Redisson?Actuator/Prometheus ??",
            ],
            [
              "??",
              "pages / stores / access.ts",
              "?????????????? API ???",
            ],
          ]}
          rowTone={["info", "info", "warning", "success", "warning", "success", "neutral", "neutral"]}
        />
      </Stack>

      <Stack gap={10}>
        <H2>5. ??</H2>
        <Card>
          <CardHeader trailing={<Pill size="sm">????</Pill>}>
            ?????
          </CardHeader>
          <CardBody>
            <Stack gap={10}>
              <Text>
                Vue Client ? Application API ? Code Generation Facade
              </Text>
              <Text tone="secondary" size="small">
                Facade ???Type Router � Prompt Enhancer � LangGraph Workflow � Tool / File
                Workspace � Preview & Deployment
              </Text>
              <Grid columns={3} gap={10}>
                <Stack gap={4}>
                  <H3>????</H3>
                  <Text size="small" tone="secondary">
                    ?????????????? + ??? + ???????
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <H3>?????</H3>
                  <Text size="small" tone="secondary">
                    ???????????MAX_QUALITY_CHECK_RETRY=2?workflowRunId ???????
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <H3>???</H3>
                  <Text size="small" tone="secondary">
                    ?????????????????????????
                  </Text>
                </Stack>
              </Grid>
            </Stack>
          </CardBody>
        </Card>
        <Callout tone="neutral" title="?????">
          quality_check ? build????? / skip_build???? / fail?? code_generator??????????
        </Callout>
      </Stack>

      <Stack gap={10}>
        <H2>6. ????</H2>
        <Grid columns={2} gap={12}>
          <Card>
            <CardHeader>????</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small">JDK 21?Node.js 20+</Text>
                <Text size="small">MySQL?? yu_ai_code_mother?+ Redis</Text>
                <Text size="small">DeepSeek / DashScope ??? Key</Text>
                <Text size="small">???COS?Pexels?Selenium ?????</Text>
                <Text size="small" tone="secondary">
                  ?? sample ??????????????
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>????</CardHeader>
            <CardBody>
              <Stack gap={6}>
                <Text size="small" weight="semibold">????</Text>
                <Text size="small">./mvnw spring-boot:run</Text>
                <Text size="small" weight="semibold">??</Text>
                <Text size="small">
                  cd yu-ai-code-mother-frontend && npm i && npm run dev
                </Text>
                <Text size="small" weight="semibold">??</Text>
                <Text size="small">
                  ./mvnw test � npm run type-check && npm run build
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
        <Callout tone="warning" title="????? Agent ??">
          ????? MySQL/Redis/??????????? Nacos/Dubbo?????????????????
        </Callout>
      </Stack>

      <Stack gap={10}>
        <H2>7. ??</H2>
        <Grid columns={2} gap={12}>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">??????</Text>
                <Text size="small" tone="secondary">
                  ?????????????????????????? SaaS ???
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">LangGraph ??</Text>
                <Text size="small" tone="secondary">
                  ????????????????????????? Agent ????
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">??????</Text>
                <Text size="small" tone="secondary">
                  ??????????????TS ??? openapi ?????? Demo?
                </Text>
              </Stack>
            </CardBody>
          </Card>
          <Card variant="borderless">
            <CardBody>
              <Stack gap={6}>
                <Text weight="semibold">???????</Text>
                <Text size="small" tone="secondary">
                  ???????????????????????????? handoff ???
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Grid>
      </Stack>

      <Stack gap={10}>
        <H2>8. ?????</H2>
        <Table
          headers={["??", "?", "?? / ??"]}
          rows={[
            [
              "?",
              "??/????????",
              "???????????????????????????????",
            ],
            [
              "?",
              "????????",
              "DeepSeek/DashScope/COS/Pexels/Selenium??????????? profile ??",
            ],
            [
              "?",
              "??????",
              "CONTEXT ??? string/number ????? ID ????? number/string ??",
            ],
            [
              "?",
              "???????",
              "???????????????? Token???????????????",
            ],
            [
              "?",
              "????",
              "???? handoff ????????????????????",
            ],
            [
              "?",
              "LangGraph ?? rc",
              "1.6.0-rc2 ???? API ?????????????",
            ],
            [
              "??",
              "????",
              "Mapper namespace??????????????????? com.threetwoa",
            ],
          ]}
          rowTone={["danger", "warning", "warning", "warning", "info", "info", "neutral"]}
        />
        <Text tone="tertiary" size="small">
          ???docs/outputs/handoff/bugfix-sandbox-and-stream/fix-report.md � CONTEXT.md �
          docs/knowledge/architecture-overview.md
        </Text>
      </Stack>

      <Divider />
      <Text tone="tertiary" size="small">
        ? Canvas ??????????????????????? IDE?
        {theme.kind === "dark" ? " Dark" : " Light"}?
      </Text>
    </Stack>
  );
}
