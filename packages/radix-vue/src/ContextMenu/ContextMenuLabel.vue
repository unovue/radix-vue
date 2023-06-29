<script lang="ts">
interface ContextMenuLabelProps {
  for?: string;
}
</script>

<script setup lang="ts">
import { PrimitiveLabel } from "@/Primitive";
const props = defineProps<ContextMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
