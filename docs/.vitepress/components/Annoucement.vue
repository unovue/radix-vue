<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter: fm } = useData()
</script>

<template>
  <a
    v-if="fm.hero.prelink"
    :href="fm.hero.prelink.link"
    :target="fm.hero.prelink.target"
    class="inline-flex items-center rounded-lg bg-[var(--vp-c-default-soft)] px-4 py-1 text-sm font-semibold mb-3"
  >
    {{ fm.hero.prelink.title }}
  </a>
</template>
