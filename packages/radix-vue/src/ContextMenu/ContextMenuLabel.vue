<script lang="ts">
import { PrimitiveLabel, type PrimitiveProps } from "@/Primitive";

interface ContextMenuLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<ContextMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel v-bind="props"><slot /></PrimitiveLabel>
</template>
