<script setup lang="ts">
import { ref } from 'vue'
import ecSiteImage from '~/assets/img/ec-site.png'
import ecpf from '~/assets/img/pf.png'
import root from '~/assets/img/root.png'

const modalImage = ref<string | null>(null)

const projects = [
  {
    title: 'ECサイト 管理画面',
    year: '2020',
    role: 'UI/UI設計 / フロントエンド実装',
    description:
      '既存ECサイトの管理画面において、ステータス管理機能のUI設計およびフロントエンド実装を担当。デザインガイドラインを整理し、再利用可能なコンポーネントとして実装しました。',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Adobe XD'],
    image: ecSiteImage,
  },
  {
    title: 'IOTデザインシステム',
    year: '2023',
    role: 'UI設計 / デザインシステム構築',
    description:
      'IoT関連プロダクトにおけるUIのデザインシステム構築を担当しました。UIコンポーネントを整理し、開発者・デザイナー間で共通利用できるデザインルールを策定。実装フェーズを考慮したUI設計を行いました。',
    tags: ['Figma', 'Adobe XD'],
    image: ecpf,
  },
  {
    title: '配送システム（地図UI）',
    year: '2025',
    role: 'UI/UI設計',
    description:
      '配送管理システムにおける地図表示画面のUI設計。複数拠点・配送状況を把握できるよう、情報の優先度を整理したUI設計を実施しました。',
    tags: ['Figma'],
    image: root,
  },
]
</script>

<template>
  <section id="projects" class="bg-[#f8fafc] px-6 md:px-10 py-20">
    <div class="max-w-[1360px] mx-auto flex flex-col gap-4">
      <FadeIn class="flex flex-col gap-4">
        <h2 class="text-4xl font-bold text-gray-900">実績</h2>
        <p class="text-base leading-[26px] text-[#4a5565]">
          管理画面、デザインシステム、地図UIまで、ユーザー目線の情報設計と実装の両方を通した制作事例
        </p>
      </FadeIn>

      <div class="flex flex-col gap-8">
        <FadeIn
          v-for="(project, index) in projects"
          :key="project.title"
          :delay="index * 100"
          class="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row gap-6 shadow-[0_8px_12px_rgba(0,0,0,0.03)]"
        >
          <!-- 画像はクリックで拡大モーダルを開く -->
          <button
            v-if="project.image"
            type="button"
            class="block w-full md:w-[311px] h-[200px] shrink-0 overflow-hidden rounded-lg cursor-pointer p-0 bg-transparent transition-transform hover:scale-[1.02] active:scale-[0.98]"
            @click="modalImage = project.image"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top hover:opacity-90 transition-opacity"
            >
          </button>

          <div class="flex flex-1 flex-col gap-6 min-w-0">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
              <span class="text-[13px] text-gray-500">{{ project.year }}</span>
            </div>
            <p class="text-sm leading-[22px] text-gray-500">{{ project.role }}</p>
            <p class="leading-[26px] text-[#4a5565]">{{ project.description }}</p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="bg-gray-100 rounded-full px-3 py-2 text-xs text-gray-900"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>

  <!-- --- モーダル部分 --- -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modalImage"
      style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: zoom-out;
      "
      @click="modalImage = null"
    >
      <!-- 閉じるボタンを確実に右上に配置 -->
      <button
        class="absolute top-10 right-10 text-white hover:text-gray-400 transition-colors"
        style="background: none; border: none; cursor: pointer"
        @click="modalImage = null"
      >
        <Icon name="lucide:x" size="48" />
      </button>

      <Transition
        appear
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-95"
      >
        <img
          :src="modalImage"
          alt="拡大画像"
          style="
            max-width: 80%;
            max-height: 80vh;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          "
          @click.stop
        >
      </Transition>
    </div>
  </Transition>
</template>
