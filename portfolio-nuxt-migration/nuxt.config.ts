// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon'],
  vite: {
    plugins: [tailwindcss()],
  },
  // GitHub Pages (https://siaexit.github.io/Portfolio/) 向けの設定。
  // NUXT_APP_BASE_URL を指定しない場合は通常の開発環境として '/' のまま動作する。
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  nitro: {
    preset: 'github_pages',
  },
})