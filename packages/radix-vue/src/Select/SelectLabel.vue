<script lang="ts">
import { PrimitiveLabel, type PrimitiveProps } from "@/Primitive";

interface SelectLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<SelectLabelProps>();
</script>

<template>
  <PrimitiveLabel v-bind="props"><slot /></PrimitiveLabel>
</template>
