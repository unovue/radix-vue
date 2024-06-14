<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ id: string }>()
</script>

<template>
  <h3
    :id="id"
    class="scroll-mt-[175px] lg:scroll-mt-[126px] font-semibold mb-1 text-xl mt-11"
  >
    <NuxtLink
      :href="`#${id}`"
      class="group"
    >
      <div class="-ml-6 pr-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute h-7">
        <Icon
          icon="heroicons:hashtag-20-solid"
          class="w-4 h-4 text-green-400 my-auto"
        />
      </div>

      <slot />
    </NuxtLink>
  </h3>
</template>
