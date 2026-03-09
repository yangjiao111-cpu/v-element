# AGENTS.md - 项目上下文文档

## 项目概述

**er-ui-element** 是一个基于 Vue 3 + TypeScript 开发的现代化 UI 组件库，采用 monorepo 架构（pnpm workspace）进行管理。

### 主要技术栈

- **核心框架**: Vue 3.4.19（Composition API）
- **开发语言**: TypeScript 5.9.3
- **构建工具**: Vite 5.4.21
- **测试框架**: Vitest 1.6.1 + @vue/test-utils 2.4.6
- **组件展示**: Storybook 8.6.17
- **文档站点**: VitePress 1.6.4
- **包管理器**: pnpm 10.30.3
- **依赖库**:
  - @fortawesome（图标）
  - @popperjs/core（定位）
  - async-validator（表单验证）
  - lodash-es（实用工具）
  - cssnano（CSS 压缩优化）

### 项目结构

```
d:\Project\v-element\
├── libs/                          # 自定义 Vite 插件
│   └── vite-plugins/
├── packages/                      # 主包目录
│   ├── components/               # Vue 组件库（Button、Icon、Collapse、Alert、Tooltip、Popconfirm）
│   ├── core/                     # 主包入口，构建 UMD 和 ES 格式
│   ├── hooks/                    # Vue Hooks（useClickOutside、useEventListener）
│   ├── theme/                    # 主题样式（CSS 变量、reset.css）
│   ├── utils/                    # 工具函数
│   ├── docs/                     # VitePress 文档站点
│   └── play/                     # 开发环境 + Storybook
├── vitest.config.ts              # Vitest 测试配置
├── tsconfig.json                 # TypeScript 配置
└── pnpm-workspace.yaml           # pnpm workspace 配置
```

## 构建和运行

### 开发环境

```bash
# 启动开发服务器（play 包）
pnpm dev

# 启动 Storybook 组件展示
pnpm story

# 启动文档站点开发
pnpm docs:dev
```

### 构建生产包

```bash
# 构建所有包（hooks + components）
pnpm build

# 仅构建组件库
pnpm build-components

# 仅构建 hooks
pnpm build-hooks

# 开发模式构建（监听文件变化）
pnpm build:dev
```

### 文档站点

```bash
# 构建文档站点
pnpm docs:build

# 预览构建后的文档
pnpm docs:preview
```

### 测试

```bash
# 运行所有测试
pnpm test

# 运行组件测试
pnpm test-comp

# 运行工具函数测试
pnpm test-utils

# 运行 hooks 测试
pnpm test-hooks
```

## 开发规范

### TypeScript 配置

- **严格模式**: 启用 `strict: true`
- **目标**: ES2020
- **模块系统**: ESNext
- **模块解析**: bundler 模式
- **JSX**: 保留 JSX，使用 Vue JSX 插件
- **类型检查**: 启用未使用变量/参数检查
- **JSX 导入源**: vue

### 测试规范

- 使用 Vitest + jsdom 环境
- 全局 API：通过 `vitest/globals` 启用
- 测试文件位置：每个包的 `__test__` 目录
- 覆盖率：使用 @vitest/coverage-v8
- 测试文件命名：`*.test.tsx` 或 `*.test.ts`
- 支持监听模式：`vitest --watch --coverage`

### 组件开发规范

- 每个组件独立目录，包含：
  - `Component.vue`: 组件实现
  - `index.ts`: 导出文件
  - `types.ts`: TypeScript 类型定义
  - `style.css`: 组件样式
  - `Component.test.tsx`: 组件测试
- 使用 TypeScript 严格类型检查
- 遵循 Vue 3 Composition API 最佳实践
- 支持插槽（slots）和自定义事件

### 主题系统

- 使用 CSS 变量（Custom Properties）定义主题
- 主题文件位置：`packages/theme/index.css`
- 支持 PostCSS 插件（嵌套、循环、混合）
- 颜色系统：primary、success、warning、danger、info
- 自动生成颜色变体（light-3 到 light-9，dark-2）
- 使用 PostCSS 的 `@each` 和 `@for` 指令动态生成颜色变体

### 构建产物

- **ES 格式**: `dist/es/index.js`（推荐使用）
- **UMD 格式**: `dist/umd/index.umd.cjs`（浏览器环境）
- **类型定义**: `dist/types/core/index.d.ts`
- **样式文件**: `dist/index.css` 和 `dist/theme/*.css`
- 支持按需导入（tree-shaking）
- sideEffects 配置确保样式文件不被 tree-shaking

## 依赖关系

```
er-ui-element (主包)
├── @er-ui-element/components
├── @er-ui-element/hooks
├── @er-ui-element/theme
└── @er-ui-element/utils
```

### 外部依赖（不打包）

- `vue`: ^3.4.27（peerDependency，实际使用 3.4.19）
- `@fortawesome/*`: 图标库
- `@popperjs/core`: 定位库
- `async-validator`: 表单验证

### 构建工具

- `@rollup/plugin-terser`: 代码压缩
- `vite-plugin-compression`: 产物压缩（gzip）
- `rollup-plugin-visualizer`: 包体积分析
- `cssnano`: CSS 优化和压缩

### 开发工具

- `release-it`: 版本发布管理
- `shelljs`: Shell 脚本执行
- `npm-run-all`: 并行和串行执行 npm 脚本
- `cross-env`: 跨平台环境变量设置

## 工作流建议

### 添加新组件

1. 在 `packages/components` 下创建新组件目录
2. 按照现有组件结构创建文件（.vue、index.ts、types.ts、style.css、.test.tsx）
3. 在 `packages/components/index.ts` 中导出
4. 在 `packages/core/components.ts` 中注册
5. 在 `packages/docs/components` 下添加文档
6. 在 `packages/play/src/stories` 下添加 Storybook story

### 添加新 Hook

1. 在 `packages/hooks` 下创建 hook 文件
2. 编写实现和类型定义
3. 在 `packages/hooks/index.ts` 中导出
4. 在 `packages/hooks/__test__` 下编写测试

### 修改主题

1. 编辑 `packages/theme/index.css` 中的 CSS 变量
2. 重新构建项目以应用更改

### 版本发布

1. 使用 `release-it` 进行版本发布
2. 自动生成 changelog
3. 支持 git tag 和 npm publish

## 现有组件

### Button（按钮）
- 支持多种类型：primary、success、warning、danger、info
- 支持多种尺寸：large、default、small
- 支持图标显示
- 支持加载状态
- 支持按钮组（ButtonGroup）
- 支持节流功能

### Icon（图标）
- 基于 @fortawesome
- 支持自定义颜色和大小
- 提供常用图标映射

### Collapse（折叠面板）
- 支持手风琴模式
- 支持自定义标题
- 支持禁用状态

### Alert（警告提示）
- 支持多种类型：info、success、warning、error
- 支持图标显示
- 支持关闭功能
- 支持居中显示
- 支持描述文本

### Tooltip（文字提示）
- 支持多种触发方式：hover、click
- 支持自定义位置
- 支持延迟显示和隐藏

### Popconfirm（气泡确认框）
- 基于 Tooltip 组件构建
- 支持自定义确认和取消按钮文本
- 支持自定义按钮类型
- 支持图标显示和自定义
- 支持自定义宽度
- 支持自动隐藏延迟

## 环境变量

- `NODE_ENV=production`: 生产环境构建
- `NODE_ENV=development`: 开发环境构建
- `NODE_ENV=test`: 测试环境

## 注意事项

- 项目使用 pnpm workspace，所有依赖都是 workspace 协议（`workspace:*`）
- 构建时需要先构建 hooks，再构建 components
- Storybook 配置在 `packages/play/.storybook` 目录
- VitePress 配置在 `packages/docs/.vitepress` 目录
- CI/CD 配置在 `.github/workflows/test-and-deploy.yaml`
- 使用 PostCSS 插件实现高级 CSS 功能（循环、混合、嵌套）
- 组件测试需要先构建 hooks 包
- 支持 watch 模式进行开发时热更新

## 作者

EricWXY

## 许可证

ISC