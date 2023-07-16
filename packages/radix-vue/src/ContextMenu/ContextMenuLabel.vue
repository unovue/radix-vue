<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";
import { type PrimitiveProps } from "@/Primitive";

interface ContextMenuLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<ContextMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
