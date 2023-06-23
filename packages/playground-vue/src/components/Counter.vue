<template>
  <p>
  {{ props.num }}
</p>
</template>

<script setup>
const props = defineProps({
  num: Number
})
</script>