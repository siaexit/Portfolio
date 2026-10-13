<script setup lang="ts">
// Figma「Skills」の3グループ。tools は1行ずつ表示する。
const skillCategories = [
  {
    title: 'UI・UX',
    years: '3年以上',
    points: ['情報設計・画面設計', 'ユーザーフロー設計', 'デザインシステム構築・運用'],
    tools: ['Figma / Adobe XD', 'Photoshop / Illustrator'],
  },
  {
    title: 'フロントエンド',
    years: '6年以上',
    points: ['React / Vue による開発', 'コンポーネント設計・再利用設計', 'API連携・状態管理'],
    tools: ['HTML / CSS / Sass / JavaScript'],
  },
  {
    title: 'バックエンド',
    years: '5年以上',
    points: ['Java / Spring による開発', 'API設計・SQLによるデータ設計', '仕様調整・連携実装'],
    tools: ['小〜中規模案件の開発に対応'],
  },
]
</script>

<template>
  <section id="skills" class="bg-white px-6 md:px-10 py-20">
    <div class="max-w-[1360px] mx-auto flex flex-col gap-10">
      <FadeIn class="flex flex-col gap-4">
        <h2 class="text-[32px] font-bold text-[#202b30]">スキル</h2>
        <p class="text-base text-[#4a5565]">実装を前提とした設計と、開発者との連携を強みに。</p>
      </FadeIn>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <FadeIn
          v-for="(category, index) in skillCategories"
          :key="category.title"
          :delay="index * 100"
          class="border-t border-[#d8dedc] pt-6"
        >
          <div class="flex justify-between items-baseline mb-4">
            <h3 class="text-[22px] font-bold text-[#202b30]">{{ category.title }}</h3>
            <span class="text-xs text-[#008575]">{{ category.years }}</span>
          </div>
          <ul class="flex flex-col gap-[10px] mb-4">
            <li v-for="point in category.points" :key="point" class="text-sm leading-[1.8] text-[#526168]">
              {{ point }}
            </li>
          </ul>
          <p v-for="tool in category.tools" :key="tool" class="text-xs leading-[1.9] text-[#7b878b]">
            {{ tool }}
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
</template>