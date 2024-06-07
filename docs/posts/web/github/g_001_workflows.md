---
tag: vite 自动化构建
---

# workflows Deploy,yml 配置

在`.github/workflows/deploy.yml`中

::: code-group
```yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm i pnpm -g
      - run: pnpm install --frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```
:::

#### 可能会出现的错误

>Action failed with "The process '/usr/bin/git' failed with exit code 128"

#### 解决方法

1. 转到存储库**Setting**
2. 选择**Actions**>>>**General**
3. 在"工作流权限(Workflow permissions)"中，选择`Read and write permissions`

