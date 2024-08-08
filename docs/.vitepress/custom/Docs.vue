<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { computed, toRefs } from 'vue'
import DocOutline from '../components/DocOutline.vue'
import DocSidebar from '../components/DocSidebar.vue'
import DocTopbar from '../components/DocTopbar.vue'
import DocFooter from '../components/DocFooter.vue'
import DocCommunity from '../components/DocCommunity.vue'
import type { DefaultTheme } from 'vitepress/theme'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
import { flatten } from '../functions/flatten'

const { theme, frontmatter } = useData()
const { path } = toRefs(useRoute())

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[])
const activeSection = computed(() => sidebar.value.find(section => flatten(section.items ?? [], 'items')?.find(item => item.link === path.value.replace('.html', ''))))

const isExamplePage = computed(() => path.value.includes('examples'))
</script>

<template>
  <div class="w-full">
    <DocTopbar />

    <main class="flex">
      <aside class="hidden md:block w-[17rem] flex-shrink-0 py-4 pl-4 pr-4 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)]">
        <div
          v-if="activeSection"
          class="h-full"
        >
          <DocSidebar :items="activeSection.items ?? []" />
        </div>
        <div class="h-6 w-full" />
      </aside>

      <div class="px-6 md:px-14 py-6 md:py-12 overflow-x-hidden flex-1 ">
        <CollapsibleRoot
          :key="path"
          class="block xl:hidden mb-4"
        >
          <CollapsibleTrigger class="text-sm rounded-lg border border-muted px-4 py-2 mb-2 bg-card data-[state=open]:bg-muted">
            On this page
          </CollapsibleTrigger>

          <CollapsibleContent class="ml-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
            <DocOutline collapsible />
          </CollapsibleContent>
        </CollapsibleRoot>

        <div class="font-bold text-primary mb-2 text-sm">
          {{ activeSection?.text }}
        </div>
        <article class="w-full prose prose-stone dark:prose-invert max-w-none">
          <Content />
        </article>

        <DocFooter v-if="!isExamplePage" />
      </div>

      <div
        v-if="!isExamplePage"
        class="hidden xl:block w-64 flex-shrink-0 py-12 pl-2 sticky top-[7.25rem] h-full overflow-y-auto md:overflow-x-hidden max-h-[calc(100vh-7.25rem)]"
      >
        <DocOutline />
        <DocCommunity class="mt-6" />
      </div>
    </main>
  </div>
</template>
