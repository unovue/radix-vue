<script lang="ts">
interface DropdownMenuLabelProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuLabelProps>();
</script>

<template>
  <label :for="props.for"><slot /></label>
</template>
