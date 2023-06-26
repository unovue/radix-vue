<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <Label :for="props.for" />
</template>
