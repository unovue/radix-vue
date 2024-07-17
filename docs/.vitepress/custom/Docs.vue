<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { computed, ref, toRefs } from 'vue'
import DocOutline from '../components/DocOutline.vue'
import DocSidebarItem from '../components/DocSidebarItem.vue'
import DocTopbar from '../components/DocTopbar.vue'
import DocFooter from '../components/DocFooter.vue'
import type { DefaultTheme } from 'vitepress/theme'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'radix-vue'

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
      <aside class="hidden md:block w-[17rem] flex-shrink-0 py-12 pr-6 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)] px-6">
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

      <div class="px-6 md:px-12 py-6 md:py-12 overflow-x-hidden flex-1 ">
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

        <article class="w-full prose prose-stone dark:prose-invert max-w-none">
          <div>
            <Content />
          </div>
        </article>

        <DocFooter />
      </div>

      <div class="hidden xl:block w-64 flex-shrink-0 py-12 pl-6 sticky top-[7.25rem] h-full overflow-y-auto md:overflow-x-hidden max-h-[calc(100vh-7.25rem)]">
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
