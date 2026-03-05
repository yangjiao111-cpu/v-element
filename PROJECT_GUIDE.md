# V-Element 项目说明

> 一份写给初级前端工程师的项目入门指南

## 项目简介

这是一个 **Vue 3 UI 组件库** 项目，类似于 Element UI 或 Ant Design。它的目的是提供一组可复用的 Vue 组件，方便开发者快速搭建网页界面。

项目采用 Monorepo（多包仓库）架构，把组件库、文档、演示、工具函数等都放在一个 Git 仓库里管理。

---

## 快速开始

```bash
# 1. 安装依赖（第一次使用时执行）
pnpm install

# 2. 启动演示项目
pnpm dev

# 3. 访问 http://localhost:5173 查看效果
```

---

## 项目结构

```
v-element/
├── packages/              # 所有代码都在这里
│   ├── components/        # 组件源码（Button、Icon 等）
│   ├── core/             # 核心导出文件
│   ├── theme/            # 主题样式
│   ├── play/             # 演示项目，运行 pnpm dev 就是这个
│   └── docs/             # 文档站点
├── package.json          # 项目配置和脚本命令
└── pnpm-workspace.yaml   # pnpm 工作空间配置
```

### 各包说明

| 包名 | 说明 |
|------|------|
| `@v-element/components` | 组件库核心代码 |
| `@v-element/play` | 演示项目，用来展示和测试组件 |
| `@v-element/docs` | 文档站点，使用 VitePress 生成 |
| `@v-element/theme` | 主题相关样式 |
| `@v-element/hooks` | Vue 组合式函数（Hooks） |
| `@v-element/utils` | 工具函数集合 |

---

## 技术栈简要说明

| 技术 | 用途 | 简单解释 |
|------|------|----------|
| Vue 3 | 前端框架 | 写组件用的框架 |
| Vite | 构建工具 | 把代码打包成浏览器能识别的，启动很快 |
| TypeScript | 类型检查 | 给 JavaScript 加类型，减少出错 |
| pnpm | 包管理器 | 类似 npm，但更快、省空间 |
| Vitest | 单元测试工具 | 写测试代码，确保组件没问题 |
| VitePress | 文档生成工具 | 把 Markdown 文档变成网站 |
| Storybook | 组件展示工具 | 单独展示每个组件，方便调试 |

---

## 什么是 Monorepo？

传统项目：一个仓库 = 一个项目

Monorepo：一个仓库 = 多个相关的项目

**本项目使用 Monorepo 的好处：**
- 组件库、文档、演示都在一个地方，方便管理
- 代码共享，不用重复造轮子
- 改一处，多处同步更新

`pnpm-workspace.yaml` 文件告诉 pnpm 这是一个工作空间，各个包之间可以用 `workspace:*` 来互相引用。

---

## GitHub Actions 是什么？

GitHub 自带的自动化工具，可以自动执行任务。

本项目配置了 `.github/workflows/test-and-deploy.yaml`，当代码推送到 `master` 分支时会自动执行：

1. **运行测试** - 检查代码是否通过测试
2. **构建文档** - 生成文档站点
3. **部署文档** - 把文档发布到 GitHub Pages

这样团队协作时，代码有错误会被自动发现，文档也会自动更新。

---

## 常用命令速查

```bash
# 安装依赖
pnpm install

# 开发调试
pnpm dev               # 启动演示项目（play）
pnpm story             # 启动 Storybook（组件展示）
pnpm docs:dev          # 启动文档站点

# 构建
pnpm docs:build        # 构建文档

# 测试
pnpm test              # 运行组件测试
```

---

## 给新手的建议

1. **先运行 `pnpm dev`**，看看项目长什么样
2. **从 `packages/components/Button` 开始看**，组件结构都很相似
3. **修改代码后，浏览器会自动刷新**，不用手动刷新页面
4. **遇到问题先看控制台报错**，一般会提示哪里有问题

---

## 学习路径

```
入门：了解项目结构 -> 运行 pnpm dev -> 浏览演示页面
进阶：查看组件源码 -> 理解组件写法 -> 尝试修改组件
高级：查看测试代码 -> 学习测试写法 -> 自己编写组件
```
