<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface HighlightsProps {
  features: string[]
}

const props = defineProps<HighlightsProps>()
</script>

<template>
  <ul class="flex flex-col gap-1 no-ml">
    <li
      v-for="(feature, index) in props.features"
      :key="index"
      class="flex items-center gap-4"
    >
      <span class="icon-bg rounded-full h-6 aspect-square !w-6 flex-none flex items-center justify-center">
        <Icon
          icon="radix-icons:check"
          class="h-4 w-4 !text-[#4CC38A]"
        />
      </span>
      <span v-html="feature" />
    </li>
  </ul>
</template>

<style>
.icon-bg {
  @apply bg-[var(--vp-c-brand-lightest)] dark:bg-[#0F291E];
}

.no-ml {
  @apply !pl-0;
}
</style>
