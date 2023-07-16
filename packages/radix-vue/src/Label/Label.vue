<script setup lang="ts">
import { PrimitiveLabel } from "@/Primitive";
import { type PrimitiveProps } from "@/Primitive";

interface LabelProps extends PrimitiveProps {
  for?: string;
}

const props = defineProps<LabelProps>();
</script>

<template>
  <PrimitiveLabel v-bind="props"><slot /></PrimitiveLabel>
</template>
