<script setup lang="ts">
// 要素が画面内に入ったタイミングでフェードイン表示する軽量な代替実装
// (motion/react の whileInView 相当)
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            visible.value = true
          }, props.delay)
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 },
  )

  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-[600ms] ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
  >
    <slot />
  </div>
</template>
