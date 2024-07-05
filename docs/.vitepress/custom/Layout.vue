<script setup lang="ts">
import Docs from './Docs.vue'
import { Content, useData } from 'vitepress'
import { Icon } from '@iconify/vue'
import SearchTrigger from '../components/SearchTrigger.vue'

const { site, theme, frontmatter, isDark } = useData()
</script>

<template>
  <div class="flex flex-col items-center min-h-screen justify-between">
    <header class="max-w-[1440px] w-full py-4 flex justify-between items-center sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <a
        href="/"
        class="flex items-center gap-2"
      >
        <img
          class="w-9"
          :src="theme.logo"
        >
        <span class="font-bold text-2xl">{{ site.title }}</span>
      </a>

      <!-- <div /> -->

      <SearchTrigger />

      <div class="flex items-center">
        <a
          href="https://discord.com/invite/jZUsrAADe5"
          target="_blank"
          class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl"
        >
          <Icon icon="simple-icons:discord" />
        </a>
        <a
          href="https://github.com/radix-vue/radix-vue"
          target="_blank"
          class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl"
        >
          <Icon icon="simple-icons:github" />
        </a>

        <button
          class="w-9 h-9 bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center rounded-lg text-xl"
          @click="isDark = !isDark"
        >
          <Icon
            v-if="isDark"
            icon="lucide:moon-star"
          />
          <Icon
            v-else
            icon="lucide:sun"
          />
        </button>
      </div>
    </header>

    <main v-if="frontmatter.layout === 'home'">
      <a href="/overview/introduction.html">Docs</a>

      <Content />

      <footer class="py-4">
        footer
      </footer>
    </main>

    <div
      v-else
      class="max-w-[1440px] w-full h-full grow"
    >
      <Docs />
    </div>
  </div>
</template>
