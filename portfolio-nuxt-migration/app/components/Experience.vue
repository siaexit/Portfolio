<script setup lang="ts">
const experiences = [
  {
    title: '通信会社サイトのシステム刷新開発',
    period: '2025年 — 現在',
    description:
      '刷新プロジェクトのフロントエンド開発。vueアプリケーションの設計と製造チームメンバーのメンタリング。',
  },
  {
    title: 'UI/配送システム開発',
    period: '2025年',
    description:
      'クライアント向けにレスポンシブなWebアプリケーションを設計・開発。ユーザーリサーチを実施し、デザインシステムを構築。',
  },
  {
    title: '飲食企業向けルート計画システム',
    period: '2024年',
    description:
      'vueとモダンなweb技術を使用してユーザーインターフェースを構築。デザイナーやバックエンドエンジニアと協力。',
  },
]
</script>

<template>
  <section id="experience" class="py-32 bg-white border-t border-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn class="mb-16">
        <h2 class="text-3xl md:text-4xl text-gray-900">経歴</h2>
      </FadeIn>

      <div class="space-y-12">
        <FadeIn
          v-for="(exp, index) in experiences"
          :key="exp.title"
          :delay="index * 100"
          class="border-b border-gray-100 pb-12 last:border-b-0"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h3 class="text-xl text-gray-900">{{ exp.title }}</h3>
            <span class="text-sm text-gray-500 md:text-right">{{ exp.period }}</span>
          </div>
          <p class="text-gray-600 leading-relaxed max-w-2xl">
            {{ exp.description }}
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
</template>
