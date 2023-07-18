<script lang="ts">
import { PrimitiveLabel, type PrimitiveProps } from "@/Primitive";

interface DropdownMenuLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel v-bind="props"><slot /></PrimitiveLabel>
</template>
