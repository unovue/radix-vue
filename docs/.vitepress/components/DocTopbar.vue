<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { type DefaultTheme, useData } from 'vitepress'
import { computed, toRefs } from 'vue'
import { Icon } from '@iconify/vue'

const { page, theme } = useData()

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[])
const sectionTabs = computed(() => sidebar.value.map(val => ({ label: val.text, link: val.items?.[0].link })))

const { arrivedState } = useScroll(globalThis.window)
const { top } = toRefs(arrivedState)
</script>

<template>
  <div
    class="border-y w-full h-12 flex items-center justify-between border-muted sticky top-[4.25rem] z-10 transition-all duration-500"
    :class="[top ? 'bg-transparent backdrop-blur-0' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90']"
  >
    <div class="h-full flex items-center">
      <a
        v-for="tab in sectionTabs"
        :key="tab.label"
        :href="tab.link"
        :class="{ '!border-b-primary !font-semibold !text-foreground': page.relativePath.includes(tab.label?.toLowerCase() ?? '') }"
        class="py-2 mx-4 text-sm font-medium border-b border-b-transparent text-muted-foreground hover:border-b-muted hover:text-foreground h-full inline-flex items-center"
      >
        {{ tab.label }}
      </a>
    </div>

    <div class="h-full flex items-center">
      <a
        href="/examples"
        :class="{ '!border-b-primary !font-semibold !text-foreground': page.relativePath.includes('examples') }"
        class="py-2 mx-4 text-sm font-medium border-b border-b-transparent text-muted-foreground hover:border-b-muted hover:text-foreground h-full inline-flex items-center gap-2"
      >
        <Icon
          icon="lucide:square-dashed-mouse-pointer"
          class="text-lg"
        />
        Examples
      </a>
    </div>
  </div>
</template>
