
  # ポートフォリオ作成

## BtoB・BtoCページの公開構成

このリポジトリでは、2つのブランチのReact/Viteアプリを1つのGitHub Pagesサイトにまとめて公開します。

| ページ | ソース | 公開URL |
| --- | --- | --- |
| BtoB | `main` ブランチ | [https://siaexit.github.io/Portfolio/](https://siaexit.github.io/Portfolio/) |
| BtoC | `agents/figma-mcp-setup` ブランチ | [https://siaexit.github.io/Portfolio/btoc/](https://siaexit.github.io/Portfolio/btoc/) |

[`deploy.yml`](./.github/workflows/deploy.yml) は両ブランチを取得して個別にビルドし、成果物を一つにまとめてGitHub Pagesへデプロイします。BtoC側はビルド時に `/Portfolio/btoc/` をベースパスとして指定するため、通常のローカル開発用設定は変わりません。

### 初回設定と運用

1. GitHubリポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。
2. このワークフローを `main` に反映します。
3. `agents/figma-mcp-setup` ブランチにも同じ `deploy.yml` をコミットしてGitHub（`origin`）へpushします。GitHub Actionsの `push` ワークフローは、対象ブランチにもワークフローファイルが存在する必要があります。
4. 以降、どちらかのブランチへのpushで両方の最新内容をビルドして公開します。必要ならActions画面から手動実行もできます。

`portfolio-nuxt-migration/` はNuxt版のプロジェクトとしてリポジトリ内に残っていますが、この2ページの公開ワークフローでは使用しません。

  ---

## ローカル開発

各ブランチで依存をインストールし、開発サーバーを起動します。

```bash
npm ci
npm run dev
```

## Figma MCP の設定

`.vscode/mcp.json` にFigmaの公式リモートMCPサーバーを設定しています。VS Codeでこのワークスペースを開き、`.vscode/mcp.json` の `figma` サーバーの上に表示される **Start** をクリックしてください。初回起動時にブラウザーでFigmaの認証画面が開くので、アクセスを許可してください。
