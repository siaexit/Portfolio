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
      '既存ECサイトの管理画面において、ステータス管理機能のUI設計およびフロントエンド実装を担当。',
    description2:
      'デザインガイドラインを整理し、再利用可能なコンポーネントとして実装しました。',
    skiles: 'HTML / CSS / JavaScript / Figma / Adobe XD',
    image: ecSiteImage,
  },
  {
    title: 'IOTデザインシステム',
    year: '2023',
    role: 'UI設計 / デザインシステム構築',
    description:
      'IoT関連プロダクトにおけるUIのデザインシステム構築を担当しました。',
    description2:
      'UIコンポーネントを整理し、開発者・デザイナー間で共通利用できるデザインルールを策定。実装フェーズを考慮したUI設計を行いました。',
    skiles: 'Figma / Adobe XD',
    image: ecpf,
  },
  {
    title: '配送システム（地図UI）',
    year: '2025',
    role: 'UI/UI設計',
    description:
      '配送管理システムにおける/配送管理システムにおける地図表示画面のUI設計。',
    description2:
      '複数拠点・配送状況を把握できるよう、情報の優先度を整理したUI設計を実施',
    skiles: 'Figma',
    image: root,
  },
]
</script>

<template>
  <section id="projects" class="py-32 bg-white border-t border-gray-100">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn class="mb-16">
        <h2 class="text-3xl md:text-4xl text-gray-900">実績</h2>
      </FadeIn>

      <div class="space-y-16">
        <FadeIn
          v-for="(project, index) in projects"
          :key="project.title"
          :delay="index * 100"
          class="border-b border-gray-100 pb-16 last:border-b-0"
        >
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl text-gray-900">{{ project.title }}</h3>
            <span class="text-sm text-gray-500">{{ project.year }}</span>
          </div>
          <p class="text-sm text-gray-500 mb-4">{{ project.role }}</p>
          <p class="text-gray-600 leading-relaxed max-w-2xl">
            {{ project.description }}
          </p>
          <p class="text-gray-600 leading-relaxed mb-6 max-w-2xl">
            {{ project.description2 }}
          </p>
          <p class="text-gray-600 leading-relaxed mb-6 max-w-2xl">
            {{ project.skiles }}
          </p>

          <!-- 画像サイズを300pxに制限 -->
          <div v-if="project.image" style="width: 300px; max-width: 100%">
            <button
              class="block w-full overflow-hidden rounded-lg border border-gray-200 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style="cursor: pointer; background: none; padding: 0"
              @click="modalImage = project.image"
            >
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto block hover:opacity-90 transition-opacity"
              >
            </button>
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
