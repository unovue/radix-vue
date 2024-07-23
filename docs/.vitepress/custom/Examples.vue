<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress'
import DocTopbar from '../components/DocTopbar.vue'
import ExampleHome from '../components/ExampleHome.vue'

const { path } = useRoute()
const { page, frontmatter } = useData()
</script>

<template>
  <div class="w-full">
    <DocTopbar />

    <main v-if="page.relativePath === 'examples/index.md'">
      <ExampleHome />
    </main>

    <main
      class="flex"
    >
      <div class="px-12 py-12 overflow-x-hidden flex-1">
        <article class="w-full prose prose-stone dark:prose-invert max-w-none">
          <div class="prose dark:prose-invert prose-lg max-w-screen-lg mx-auto">
            <Content />
          </div>
        </article>
      </div>
    </main>
  </div>
</template>
