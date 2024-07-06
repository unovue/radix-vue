<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { computed, toRefs } from 'vue'
import DocOutline from '../components/DocOutline.vue'
import DocSidebarItem from '../components/DocSidebarItem.vue'
import DocTopbar from '../components/DocTopbar.vue'
import DocFooter from '../components/DocFooter.vue'
import type { DefaultTheme } from 'vitepress/theme'

const { theme, frontmatter } = useData()
const { path } = toRefs(useRoute())

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[])
const activeSection = computed(() => sidebar.value.find(section => section.items?.find(item => item.link === path.value.replace('.html', ''))))
</script>

<template>
  <div class="w-full">
    <DocTopbar />

    <main
      v-if="frontmatter.layout !== 'example'"
      class="flex"
    >
      <aside class="w-64 flex-shrink-0 py-12 pr-6 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)]">
        <ul
          v-if="activeSection"
          class="h-full"
        >
          <DocSidebarItem
            v-for="item in activeSection.items"
            :key="item.text"
            :item="item"
          />
        </ul>
        <div class="h-6 w-full" />
      </aside>

      <div class="px-12 py-12 overflow-x-hidden flex-1">
        <article class="w-full prose prose-stone dark:prose-invert max-w-none">
          <div>
            <Content />
          </div>
        </article>

        <DocFooter />
      </div>

      <div class="w-64 flex-shrink-0 py-12 pl-6 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)]">
        <DocOutline />
      </div>
    </main>

    <main
      v-else
      class="flex"
    >
      <div class="px-12 py-12 overflow-x-hidden flex-1">
        <article class="w-full prose prose-stone dark:prose-invert max-w-none">
          <div>
            <Content />
          </div>
        </article>
      </div>
    </main>
  </div>
</template>
