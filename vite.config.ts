import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // ← ここを plugin-react-swc に変更

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})