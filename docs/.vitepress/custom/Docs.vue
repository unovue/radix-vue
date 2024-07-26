<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { computed, ref, toRefs } from 'vue'
import DocOutline from '../components/DocOutline.vue'
import DocSidebarItem from '../components/DocSidebarItem.vue'
import DocTopbar from '../components/DocTopbar.vue'
import DocFooter from '../components/DocFooter.vue'
import type { DefaultTheme } from 'vitepress/theme'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
import { flatten } from '../functions/flatten'

const { theme, frontmatter } = useData()
const { path } = toRefs(useRoute())

const sidebar = computed(() => theme.value.sidebar as DefaultTheme.SidebarItem[])
const activeSection = computed(() => sidebar.value.find(section => flatten(section.items ?? [], 'items')?.find(item => item.link === path.value.replace('.html', ''))))
</script>

<template>
  <div class="w-full">
    <DocTopbar />

    <main class="flex">
      <aside class="hidden md:block w-[17rem] flex-shrink-0 py-8 pl-4 pr-2 sticky top-[7.25rem] h-full overflow-y-auto max-h-[calc(100vh-7.25rem)]">
        <ul
          v-if="activeSection"
          class="h-full"
        >
          <template
            v-for="item in activeSection.items"
            :key="item.text"
          >
            <ul
              v-if="item.items?.length"
              class="mb-6"
            >
              <div class="pl-4 font-bold text-sm pb-2">
                {{ item.text }}
              </div>
              <DocSidebarItem
                v-for="subitem in item.items"
                :key="subitem.text"
                :item="subitem"
              />
            </ul>

            <DocSidebarItem
              v-else
              :item="item"
            />
          </template>
        </ul>
        <div class="h-6 w-full" />
      </aside>

      <div class="px-6 md:px-12 py-6 md:py-10 overflow-x-hidden flex-1 ">
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

        <DocFooter />
      </div>

      <div class="hidden xl:has-[.non-empty]:block  w-64 flex-shrink-0 py-8 pl-6 sticky top-[7.25rem] h-full overflow-y-auto md:overflow-x-hidden max-h-[calc(100vh-7.25rem)]">
        <DocOutline />
      </div>
    </main>
  </div>
</template>
