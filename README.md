
  # ポートフォリオ作成

  ## リポジトリ構成について

  このリポジトリには、役割の異なる2つのプロジェクトが共存しています。

  | ディレクトリ | 役割 | 技術スタック | 公開状況 |
  | --- | --- | --- | --- |
  | リポジトリ直下（本ディレクトリ） | **Figma Makeのデザイン取り込み用**。Figma Makeが生成するReactコードの受け皿として使用し、本番公開はしない | React + Vite | 非公開（取り込み作業場） |
  | [`portfolio-nuxt-migration/`](./portfolio-nuxt-migration) | **本番公開用の正式実装** | Nuxt/Vue + Tailwind CSS | [GitHub Pages](https://siaexit.github.io/Portfolio/) で公開中 |

  ### 運用フロー
  1. Figmaでデザインを更新し、Figma Makeで本ディレクトリ（React/Vite）にコードを生成する
  2. 生成されたReactコードをそのままマージせず、デザイン差分を確認する
  3. 差分内容を [`portfolio-nuxt-migration/app/components/`](./portfolio-nuxt-migration/app/components) 配下のVueコンポーネントへ手動で反映する
  4. `portfolio-nuxt-migration/` の変更を `main` ブランチへコミットし、[`deploy-nuxt.yml`](./.github/workflows/deploy-nuxt.yml) ワークフローを実行してGitHub Pagesへデプロイする

  詳しくは [`portfolio-nuxt-migration/README.md`](./portfolio-nuxt-migration/README.md) を参照してください。

  ---

  ## （以下、本ディレクトリ：React/Vite版の操作メモ）

  ## Node を v18 系に切り替え（nvm を使っている場合）
  node -v

  ## 依存をインストール
  npm ci

  ## 開発サーバ起動（ホットリロード）
  npm run dev

  ## ビルド（dist を生成）
  npm run build

  npm run deploy

