<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <NuxtRouteAnnouncer />
    <Navigation />
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </main>
    <div class="bg-white flex justify-end h-[88px] items-center px-6 md:px-24">
      <a href="#home" class="text-xs text-[#008575]" @click.prevent="scrollToTop">ページの先頭へ ↑</a>
    </div>
    <footer class="bg-white text-gray-500 p-8 border-t border-gray-200">
      <p class="text-sm text-center">© 2026 出口 史亜. All rights reserved.</p>
    </footer>
  </div>
</template>
