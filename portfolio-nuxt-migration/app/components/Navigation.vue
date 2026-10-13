<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navItems = [
  { label: 'ホーム', href: '#home' },
  { label: 'スキル', href: '#skills' },
  { label: '実績', href: '#projects' },
  { label: '経歴', href: '#experience' },
]

function scrollToSection(href: string) {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 transition-all duration-300"
    :class="isScrolled ? 'bg-[#faf9f5]/80 backdrop-blur-md' : 'bg-[#faf9f5]'"
  >
    <div class="max-w-[1440px] mx-auto px-6 md:px-8">
      <div class="flex justify-between items-center h-[88px]">
        <a href="#home" class="flex items-center gap-3" @click.prevent="scrollToSection('#home')">
          <span
            class="w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center"
          >
            S
          </span>
          <span class="flex flex-col">
            <span class="text-lg font-bold text-gray-900">出口 史亜</span>
            <span class="text-[13px] text-gray-500">UI/UX Designer</span>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-[#4a5565] hover:text-[#008575] transition-colors text-sm"
            :class="{ 'font-semibold !text-[#008575]': item.href === '#home' }"
            @click.prevent="scrollToSection(item.href)"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-gray-900" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <Icon :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden pb-4 border-t border-gray-200 pt-4">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="block py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          @click.prevent="scrollToSection(item.href)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
