
  # ポートフォリオ作成

  This is a code bundle for ポートフォリオ作成. The original project is available at https://www.figma.com/design/x2iij1IZSHsPdpE3bDmqeQ/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E4%BD%9C%E6%88%90.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  

  ## Node を v18 系に切り替え（nvm を使っている場合）
  node -v

  ## 依存をインストール
  npm ci

  ## 開発サーバ起動（ホットリロード）
  npm run dev
  ## ブラウザで http://localhost:5173 を開く

  ## ビルド（dist を生成）
  npm run build
  ## postbuild が定義されていれば自動で走ります。手動実行:
  node scripts/copy-index-to-404.js

  ## ビルド成果物をローカルで確認
  npm run preview
  ## または 'serve' を使う場合
  ## npx serve -s dist