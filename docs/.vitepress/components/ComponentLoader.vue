<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const Component = await import(`../../components/demo/${props.name}/tailwind/index.vue`).then(i => i.default)
</script>

<template>
  <Component :is="Component" />
</template>
