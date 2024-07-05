<script setup lang="ts">
import { type DefaultTheme, useData } from 'vitepress'
import { computed } from 'vue'

const { page, theme } = useData()

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[])
const sectionTabs = computed(() => sidebar.value.map(val => ({ label: val.text, link: val.items?.[0].link })))
</script>

<template>
  <div class="border-y w-full h-12 flex items-center border-muted sticky top-[4.25rem] z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <a
      v-for="tab in sectionTabs"
      :key="tab.label"
      :href="tab.link"
      :class="{ '!border-b-primary !font-semibold !text-white': page.relativePath.includes(tab.label?.toLowerCase() ?? '') }"
      class="py-2 mx-4 text-sm font-medium border-b border-b-transparent text-muted-foreground hover:border-b-muted hover:text-white h-full inline-flex items-center"
    >
      {{ tab.label }}
    </a>
  </div>
</template>
