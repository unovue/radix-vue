<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <label :for="props.for"><slot /></label>
</template>