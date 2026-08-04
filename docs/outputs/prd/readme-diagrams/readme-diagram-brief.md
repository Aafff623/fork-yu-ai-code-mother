# README Diagram Brief

日期：2026-08-05（细致 Review 补齐）  
产品：AI Code Mother（fork · threetwoa）

## 章节地图

| README 章节 | 配图 | 说明 |
|---|---|---|
| Header | `banner.png` | 3:1 页首横幅 |
| 功能矩阵 | `features.png` | 核心能力一览 |
| 主链路 | `workflow.png` | 需求 → 生成 → 预览/部署 |
| 技术栈 | `tech-stack.png` | 分层技术选型 |
| 架构 | `architecture.png` | 系统边界与调用方向 |
| 模块阅读顺序 | `structure.png` | 仓库地图（README 另有 Markdown 树直呈） |
| Preview | （省略独立 Gallery） | 单产品应用；用 README 预览壳 |
| Showcase | `showcase-*.png` | 真机截图待 Playwright 补齐 |

## 资产清单（契约文件名）

| 文件 | 状态 | 比例 / 方法 |
|---|---|---|
| `assets/images/readme/banner.png` | 已有 | 3:1 · 生图 |
| `assets/images/readme/features.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/architecture.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/tech-stack.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/workflow.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/structure.png` (+ `.svg`) | 已有 | 16:9 · 生图 |
| `assets/images/readme/preview-shell.png` | **省略** | 本仓无 Preview 站 |
| `assets/images/readme/showcase-*.png` | 占位 | `method: screenshot` |

## 设计语言

- 主基调：深海墨蓝、精密网格、克制玻璃材质。
- 强调：电光青 / 电光蓝。
- Banner：无水印、无人物、无难辨小字、无伪造产品 UI。
- 架构图须体现单向调用与显式边界（Vue → Gateway/App → AI Workflow → Infra）。

## Preview / Showcase 决策

| 项 | 决策 |
|---|---|
| Preview 站 | 省略（单产品 Web；README 已书面声明） |
| README 预览壳 | 启用 · 端口 `4313` · `preview-readme.{html,css,js}` |
| Showcase | 推荐路径已写；真机图待视觉验收后 Playwright 截取 |

## 验收

- [x] 六张契约说明图已落盘并被 README 引用
- [x] 目录树 / Key docs 直接呈现（无 `<details>`）
- [x] Preview 省略理由已写；预览壳端口与 CLAUDE 一致
- [ ] Showcase 真机图（业务 theme 续作，不阻塞 init Gate）
