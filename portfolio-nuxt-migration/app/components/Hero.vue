<script setup lang="ts">
import ecSiteImage from '~/assets/img/ec-site.png'
import ecpf from '~/assets/img/pf.png'

// Figma「Hero」のプロフィール情報。チップは経験年数と主要技術の表示用。
const profileChips = [
  'UI/UX 3+ years',
  'Frontend 6+ years',
  'Backend 5+ years',
  'React・Vue',
  'Java・Spring',
]

// Figma「Hero Visual」のプレビューカード。実績セクションの代表2件を抜粋している。
const previewCards = [
  {
    title: 'IOTデザインシステム',
    year: '2023',
    role: 'UI設計 / デザインシステム構築',
    description:
      'IoT関連プロダクトにおけるUIのデザインシステム構築。UIコンポーネントを整理し、開発者・デザイナー間で共通利用できるデザインルールを策定。実装フェーズを考慮したUI設計。',
    tags: ['Figma', 'Adobe XD'],
    image: ecpf,
  },
  {
    title: 'ECサイト 管理画面',
    year: '2020',
    role: 'UI/UI設計 / フロントエンド実装',
    description:
      '既存ECサイトの管理画面において、ステータス管理機能のUI設計およびフロントエンド実装。デザインガイドラインを整理し、再利用可能なコンポーネントとして実装。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Adobe XD'],
    image: ecSiteImage,
  },
]

function scrollToExperience() {
  document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="bg-white pt-[88px]">
    <div class="max-w-[1360px] mx-auto px-6 md:px-10 py-10">
      <div class="flex flex-col lg:flex-row lg:items-center gap-8">
        <!-- プロフィール -->
        <FadeIn class="w-full lg:w-[640px] shrink-0 flex flex-col gap-8">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <h1 class="text-[38px] text-[#202b30]">出口 史亜</h1>
              <p class="text-xl font-bold text-gray-900">
                Front End Engineer<br />
                UI/UX Designer
              </p>
            </div>

            <p class="text-lg leading-[30px] text-[#4a5565]">
              UI設計から実装まで一貫して行う<br />
              フロントエンドエンジニア兼UI/UXデザイナー
            </p>

            <ul class="flex flex-wrap gap-3">
              <li
                v-for="chip in profileChips"
                :key="chip"
                class="bg-gray-100 rounded-full px-3 py-2 text-[13px] font-bold text-gray-900"
              >
                {{ chip }}
              </li>
            </ul>
          </div>

          <div class="bg-white border border-gray-200 rounded-[20px] p-6 flex flex-col gap-4">
            <p class="text-lg font-bold text-gray-900">制作スタイル</p>
            <p class="leading-[26px] text-[#4a5565]">
              BtoC向け案件にも応じやすい、設計・実装の両方を通した制作スタイルです。<br />
              管理画面の見直し、ECサイトの運用画面、地図UI、デザインシステムの構築まで、<br />
              ユーザー目線で情報設計し、開発者との連携も得意にしています。
            </p>
          </div>

          <div>
            <button
              type="button"
              class="border border-gray-200 rounded-full px-5 py-[14px] text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors"
              @click="scrollToExperience"
            >
              経歴を見る
            </button>
          </div>
        </FadeIn>

        <!-- プレビューカード -->
        <div class="w-full lg:w-[640px] shrink-0 flex flex-col gap-4">
          <FadeIn
            v-for="(card, index) in previewCards"
            :key="card.title"
            :delay="(index + 1) * 100"
          >
            <article
              class="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.05)]"
            >
              <img :src="card.image" :alt="card.title" class="w-full h-[240px] object-cover object-top" />
              <div class="p-6 flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <h2 class="text-xl font-bold text-gray-900">{{ card.title }}</h2>
                  <span class="text-[13px] text-gray-500">{{ card.year }}</span>
                </div>
                <p class="text-sm leading-[22px] text-gray-500">{{ card.role }}</p>
                <p class="text-[15px] leading-[26px] text-[#4a5565]">{{ card.description }}</p>
                <ul class="flex flex-wrap gap-2">
                  <li
                    v-for="tag in card.tags"
                    :key="tag"
                    class="bg-gray-100 rounded-full px-3 py-2 text-xs font-medium text-gray-900"
                  >
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
</template>
