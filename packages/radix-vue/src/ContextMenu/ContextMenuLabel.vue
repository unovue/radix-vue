<script lang="ts">
interface ContextMenuLabelProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<ContextMenuLabelProps>();
</script>

<template>
  <label :for="props.for"><slot /></label>
</template>
