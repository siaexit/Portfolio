import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // ← ここを plugin-react-swc に変更

// vite.config.js
export default defineConfig({
  base: '/Portfolio/', // リポジトリ名を / で囲んで指定
  // ...他の設定
})
