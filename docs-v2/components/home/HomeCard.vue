<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div
    class="h-96 border border-[#77777725] rounded-3xl bg-[#8181811a] flex flex-col">
    <div class="relative w-full flex-grow flex items-center justify-center text-xs">
    <slot />
  </div>
    <div class="h-28 flex flex-col justify-start px-5">
      <h3 class="font-semibold text-lg">{{ props.title ? props.title : 'Title Menu' }}</h3>
      <p class="text-white/50 text-sm">{{ props.description ? props.description : 'Description where this is at.' }}</p>
    </div>
  </div>
</template>
