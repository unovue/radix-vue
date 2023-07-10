<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";

interface SelectLabelProps {
  asChild?: boolean;
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<SelectLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
