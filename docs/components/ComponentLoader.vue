<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const Component = defineAsyncComponent({
  loader: () => import(`../components/demo/${props.name}/index.vue`),
})
</script>

<template>
  <Component :is="Component" />
</template>
