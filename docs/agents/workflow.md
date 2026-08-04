# Engineering Workflow

## 标准路径

```text
Local Issue（.scratch/<feature>/）
  → docs/outputs/report/{theme}/     # 可选调研
  → docs/outputs/prd/{theme}/prd.md
  → docs/outputs/handoff/{theme}/…
  → implementation
  → targeted verification
  → review【停】
  → commit + docs/outputs/commit-history/{branch}/YYYY-MM-DD.md
```

## 规模判断

- XS：单文案或无行为配置 → Issue → 改 → 验。
- S：单模块修复 → handoff + 目标测试。
- M：跨文件业务 → 先验收条件，更新领域文档。
- L：跨模块 / 协议 / 数据 / 认证 → ADR + 分阶段交付。

## 分支与提交

一次提交一个可回滚主题。包目录迁移与引用更新同提交；生成物、真实密钥、本地缓存不得入库。

## 当前项目验证

`单体 ./mvnw compile`；微服务 `mvn compile`；前端 `npm run build` / `type-check`。
