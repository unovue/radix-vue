<script setup lang="ts">
import Docs from './Docs.vue'
import { Content, useData } from 'vitepress'
import { Icon } from '@iconify/vue'
import { Separator } from 'radix-vue'
import SearchTrigger from '../components/SearchTrigger.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import { useScroll } from '@vueuse/core'
import { toRefs } from 'vue'
import Showcase from './Showcase.vue'

const { site, theme, frontmatter } = useData()
const { arrivedState } = useScroll(globalThis.window)
const { top } = toRefs(arrivedState)
</script>

<template>
  <div class="flex flex-col items-center min-h-screen justify-between">
    <div class="absolute z-0 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div class="w-[108rem] flex-none flex justify-end">
        <img
          src="/bg.png"
          alt=""
          class="w-[50rem] flex-none max-w-none"
        >
      </div>
    </div>

    <header
      class="max-w-[1440px] w-full py-4 flex items-center justify-between sticky top-0 z-10 transition-all duration-500"
      :class="[top ? 'bg-transparent backdrop-blur-0' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90']"
    >
      <div class="flex items-center gap-8">
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
        <SearchTrigger />
      </div>

      <div class="flex items-center">
        <a
          href="/overview/introduction.html"
          class="py-2 mx-4 text-sm font-semibold text-muted-foreground hover:text-foreground h-full inline-flex items-center"
        >
          Docs
        </a>

        <a
          href="/showcase"
          class="py-2 mx-4 text-sm font-semibold text-muted-foreground hover:text-foreground h-full inline-flex items-center"
        >
          Showcase
        </a>

        <Separator
          class="bg-muted h-4 w-px mx-4"
          decorative
          orientation="vertical"
        />
        <ThemeToggle />

        <Separator
          class="bg-muted h-4 w-px mx-4"
          decorative
          orientation="vertical"
        />

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
      v-else-if="frontmatter.layout === 'showcase'"
      class="max-w-[1440px] w-full h-full grow"
    >
      <Showcase />
    </div>

    <div
      v-else
      class="max-w-[1440px] w-full h-full grow"
    >
      <Docs />
    </div>
  </div>
</template>
