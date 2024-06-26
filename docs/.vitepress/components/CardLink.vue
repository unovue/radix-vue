<script setup lang="ts">
import { AspectRatio } from 'radix-vue'

defineProps<{
  title: string
  description?: string
  url: string
  image?: string
}>()
</script>

<template>
  <div>
    <a
      class="flex flex-col bg-[var(--vp-c-bg-soft)] hover:bg-[var(--vp-c-bg-alt)] transition duration-300 rounded-xl p-4"
      target="_blank"
      :href="url"
    >
      <h5 class="font-bold">{{ title }}</h5>
      <p class="my-1 text-sm text-[var(--vp-c-text-2)]">{{ description }}</p>

      <AspectRatio
        v-if="image"
        :ratio="16 / 9"
        class="rounded-md mt-2 overflow-hidden  "
      >
        <img
          class="w-full h-full object-cover"
          :src="image"
          :alt="title"
        >
      </AspectRatio>

    </a>
  </div>
</template>
