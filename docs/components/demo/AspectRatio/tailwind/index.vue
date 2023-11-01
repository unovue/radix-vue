<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
</script>

<template>
  <div class="shadow-blackA7 w-full sm:w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]">
    <AspectRatio :ratio="16 / 9">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >
    </AspectRatio>
  </div>
</template>
