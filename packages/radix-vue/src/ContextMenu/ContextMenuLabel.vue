<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";

interface ContextMenuLabelProps {
  asChild?: boolean;
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<ContextMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
