# ポートフォリオ（Nuxt/Vue版・本番実装）

このディレクトリが **本番公開用の正式実装** です。GitHub Pages（[https://siaexit.github.io/Portfolio/](https://siaexit.github.io/Portfolio/)）に公開されているのはこちらの内容です。

リポジトリ直下（親ディレクトリ）のReact/Vite版は、Figma Makeによるデザイン取り込み専用の作業場であり、本番公開はされていません。デザイン変更は親ディレクトリで生成された内容を確認したうえで、このディレクトリ配下の `.vue` コンポーネントへ手動で反映してください。詳細は[リポジトリ直下のREADME](../README.md)を参照してください。

## デプロイ

`main` ブランチへの変更後、GitHub Actionsの [`Deploy Nuxt to GitHub Pages`](../.github/workflows/deploy-nuxt.yml) ワークフローを手動実行（`workflow_dispatch`）するとGitHub Pagesへ反映されます。

---

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
