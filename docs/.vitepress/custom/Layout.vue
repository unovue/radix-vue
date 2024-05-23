<script setup lang="ts">
import Docs from './Docs.vue';

import { Content, useData } from 'vitepress'
const { site, page, title, theme, frontmatter } = useData()
</script>

<template> 
  <div class="flex flex-col items-center min-h-screen justify-between">
    <header class="max-w-screen-xl w-full py-4 flex justify-between">
      <a href="/" class="flex items-center gap-2">
        <img class="w-9" :src="theme.logo">
        <span class="font-bold text-2xl">{{  site.title  }}</span>
      </a>


        <div>

        </div>

        <div>
          dark toggle
        </div>
    </header>


    <main v-if="frontmatter.layout === 'home'">
      <Content></Content>
    </main>

    <div v-else class="max-w-screen-xl w-full h-full grow">
      <Docs></Docs>
    </div>


    <footer class="py-4">
      footer
    </footer>
  </div>
</template>