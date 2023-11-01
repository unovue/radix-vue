<script setup lang="ts">
import { AspectRatio } from 'radix-vue'
import './styles.css'
</script>

<template>
  <div class="Container">
    <AspectRatio :ratio="16 / 9">
      <img
        class="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >
    </AspectRatio>
  </div>
</template>
