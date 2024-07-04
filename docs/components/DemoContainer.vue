<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  title: string
  overflow?: boolean
}>()
</script>

<template>
  <div
    class="w-full"
    :class="{ 'overflow-x-auto': overflow }"
  >
    <a
      class="capitalize md:text-lg font-semibold mb-2 ml-2 inline-flex items-center group"
      :href="`/components/${title?.replace(/\s+/g, '-')}.html`"
    >{{ title }}

      <Icon
        icon="ic-round-arrow-forward"
        class="ml-2 group-focus:ml-3 group-hover:ml-3 transition-[margin]"
      />
    </a>
    <div
      class="custom-justify-center p-4 md:p-10 min-h-[256px] lg:h-[400px] bg-gradient-to-br rounded-xl from-teal9 to-green9 w-full relative items-center flex"
      :class="{ 'overflow-x-auto': overflow }"
    >
      <slot />
    </div>
  </div>
</template>
