<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{ id: string }>()
</script>

<template>
  <h2
    :id="id"
    class="scroll-mt-[180px] lg:scroll-mt-[141px] font-semibold mb-2.5 text-3xl mt-12"
  >
    <NuxtLink
      :href="`#${id}`"
      class="group"
    >
      <div class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute my-auto">
        <Icon
          icon="heroicons:hashtag-20-solid"
          class="w-5 h-5 text-green-400"
        />
      </div>

      <slot />
    </NuxtLink>
  </h2>
</template>
