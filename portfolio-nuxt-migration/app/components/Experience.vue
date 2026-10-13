<script setup lang="ts">
const experiences = [
  {
    title: '通信会社サイトのシステム刷新開発',
    period: '2025年 — 現在',
    description:
      'Vueアプリケーションの設計とフロントエンド開発。製造チームメンバーのメンタリング。',
  },
  {
    title: 'UI/配送システム開発',
    period: '2025年',
    description:
      'レスポンシブなWebアプリケーションの設計・開発。ユーザーリサーチとデザインシステム構築。',
  },
  {
    title: '飲食企業向けルート計画システム',
    period: '2024年',
    description:
      'Vueを用いたUI構築。デザイナー・バックエンドエンジニアと連携。',
  },
]
</script>

<template>
  <section id="experience" class="bg-[#f8fafc] px-6 md:px-20 py-10">
    <div class="max-w-[1280px] mx-auto flex flex-col gap-10">
      <FadeIn class="flex flex-col gap-4">
        <h2 class="text-[32px] font-bold text-[#202b30]">経歴</h2>
        <p class="text-base text-[#4a5565]">
          UI設計、フロントエンド開発、バックエンド連携まで、実装を前提とした制作を通して。
        </p>
      </FadeIn>

      <div class="flex flex-col gap-10">
        <FadeIn
          v-for="(exp, index) in experiences"
          :key="exp.title"
          :delay="index * 100"
          class="border-t border-[#d8dedc] pt-6 flex flex-col md:flex-row gap-2 md:gap-10"
        >
          <span class="md:w-[138px] shrink-0 text-[13px] text-[#008575]">{{ exp.period }}</span>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-medium text-[#202b30]">{{ exp.title }}</h3>
            <p class="text-sm leading-[1.8] text-[#526168]">{{ exp.description }}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
</template>