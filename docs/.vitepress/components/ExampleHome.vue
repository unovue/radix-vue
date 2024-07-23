<script setup lang="ts">
import { computed } from 'vue'
// @ts-expect-error type issue with `createContentLoader`
import { data as examples } from '../functions/examples.data'
import type { ContentData } from 'vitepress'

const data = computed(() => examples.filter((example: ContentData) => example.url !== '/examples/') as ContentData[])
</script>

<template>
  <div class="p-12">
    <div>
      <a
        v-for="example in data"
        :key="example.url"
        :href="example.url"
        class=""
      >
        {{ example.frontmatter.title }}
      </a>
    </div>
  </div>
</template>
