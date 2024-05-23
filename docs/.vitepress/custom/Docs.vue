<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import { computed, toRefs } from 'vue';

const { site, page, title, theme, frontmatter, ...a } = useData()
const { path } = toRefs(useRoute())
const sectionTabs =  computed<{ label: string, link: string }[]>(() => theme.value.sidebar.map((val: any) => ({ label: val.text, link: val.items?.[0].link })))
const activeSection = computed(() => theme.value.sidebar.find(section => section.items.find(item =>  item.link === path.value.replace(".html", ""))))
</script>

<template>
  <div>
    <div class="border-y w-full h-12 flex items-center border-muted">
      <a class="py-2 px-4 text-sm font-medium rounded" v-for="tab in sectionTabs" :key="tab.label" :href="tab.link">{{  tab.label  }}</a>
    </div>

    <main class="flex w-full"> 
      <aside class="w-64 flex-shrink-0 py-12 overflow-y-auto">
        <ul>
          <li v-for="item in activeSection.items" class="flex items-center text-sm text-muted-foreground hover:bg-card hover:text-foreground rounded-lg">
            <a :href="item.link" v-html="item.text" class="h-[2.25rem] px-4 inline-flex items-center"></a>
          </li>
        </ul>
      </aside>
      
      <div class="w-full flex justify-center py-12">
        <article class="w-full prose prose-stone dark:prose-invert">
          <Content></Content>
        </article>
      </div>
      
      <aside class="w-64 flex-shrink-0 py-12">right nav</aside>
    </main>
  </div>
</template>