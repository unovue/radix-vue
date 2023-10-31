<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const Component = defineAsyncComponent(() => import(`../components/demo/${props.name}/tailwind/index.vue`))
</script>

<template>
  <Component :is="Component" />
</template>
