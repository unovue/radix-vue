<script setup lang="ts">
import Docs from './Docs.vue'
import { Content, useData } from 'vitepress'
import SearchTrigger from '../components/SearchTrigger.vue'
import Navbar from '../components/Navbar.vue'
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
          class="w-[64rem] flex-none max-w-none -mt-6"
        >
      </div>
    </div>

    <header
      class="max-w-[1440px] w-full py-4 flex items-center justify-between sticky top-0 z-10 transition-all duration-500 px-6 h-[68px] md:h-full"
      :class="[top ? 'bg-transparent backdrop-blur-0' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90']"
    >
      <div class="w-full justify-between md:justify-normal flex items-center gap-8">
        <a
          href="/"
          class="flex items-center gap-2"
        >
          <img
            class="w-6 md:w-9"
            :src="theme.logo"
          >
          <span class="font-bold text-xl md:text-2xl">{{ site.title }}</span>
        </a>
        <SearchTrigger />
      </div>

      <Navbar />
    </header>

    <main
      v-if="frontmatter.layout === 'home'"
      class="px-6"
    >
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
