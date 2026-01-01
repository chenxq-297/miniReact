# miniReact

一个基于 Monorepo 架构的简易版 React 实现。

## 项目结构

```text
.
├── packages
│   ├── react     # React 核心代码 (jsx, element 等)
│   └── shared    # 跨包通用的类型定义与工具函数
├── scripts
│   └── rollup    # Rollup 构建配置文件
├── dist          # 编译产物目录
└── package.json  # 根目录配置与工作区管理
```

## 开发环境准备

项目使用 [pnpm](https://pnpm.io/) 作为包管理工具。

### 安装依赖

```bash
pnpm install
```

### 构建项目

构建所有包的开发版本：

```bash
pnpm build:dev
```

### 代码规范检查

```bash
pnpm lint
```

## 提交规范

项目集成了 Husky 和 Commitlint，提交信息需遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

常用的 type 包括：

- `feat`: 新功能
- `fix`: 修复 Bug
- `chore`: 修改辅助工具/构建流程等
- `docs`: 文档变更
- `refactor`: 代码重构
- `test`: 测试相关

示例：

```bash
git commit -m "feat: 实现 jsx 方法"
```
