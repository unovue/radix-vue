<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<template>
  <h2 :id="id" class="scroll-mt-[180px] lg:scroll-mt-[141px] font-semibold mb-2 text-3xl mt-12">
    <NuxtLink :href="`#${id}`" class="group">
      <div class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute">
        <Icon name="i-heroicons-hashtag-20-solid" class="w-4 h-4 text-primary-500 dark:text-primary-400" />
      </div>

      <slot />
    </NuxtLink>
  </h2>
</template>
