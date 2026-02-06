import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // ← ここを plugin-react-swc に変更

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // ★この行を必ず追加してください！
})