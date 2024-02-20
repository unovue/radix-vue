<script setup lang="ts">
import { AspectRatio } from '../'
</script>

<template>
  <Story title="Aspect Ratio/Demo" :layout="{ type: 'single', iframe: true }">
    <Variant title="default">
      <AspectRatio :ratio="16 / 9">
        <img
          class="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        >
      </AspectRatio>
    </Variant>
  </Story>
</template>
