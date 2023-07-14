<script setup lang="ts">
import {ProseH3} from "./prose"
import { Icon } from "@iconify/vue";

interface HighlightsProps {
  features: string[]
}

const props = defineProps<HighlightsProps>()
</script>

<template>
  <ul class="flex flex-col gap-1 no-ml">
    <li class="flex items-center gap-4" v-for="feature in props.features">
      <span class="icon-bg rounded-full h-6 aspect-square !w-6 flex-none flex items-center justify-center">
        <Icon icon="radix-icons:check" class="h-4 w-4 !text-green-500" />
      </span><span>{{ feature }}</span>
    </li>
  </ul>
</template>

<style>
.icon-bg {
  @apply bg-green12
}

.no-ml {
  @apply !pl-0
}
</style>