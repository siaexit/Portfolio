import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 用に base をリポジトリ名に合わせる (末尾スラッシュ必須)
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  // 既存の設定があればここに追加してください
})