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
  { label: 'スキル', href: '#skills' },
  { label: '実績', href: '#projects' },
  { label: '経歴', href: '#experience' },
  { label: 'お問い合わせ', href: '#contact' },
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
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100' : 'bg-white'"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <a href="#home" class="text-gray-900 text-sm" @click.prevent="scrollToSection('#home')">
          出口 史亜
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-600 hover:text-gray-900 transition-colors text-sm"
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
      <div v-if="isMobileMenuOpen" class="md:hidden pb-4 border-t border-gray-100 pt-4">
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
