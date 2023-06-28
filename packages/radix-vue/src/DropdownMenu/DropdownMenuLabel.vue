<script lang="ts">
interface DropdownMenuLabelProps {
  asChild?: boolean;
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuLabelProps>();
</script>

<template>
  <label :for="props.for"><slot /></label>
</template>
