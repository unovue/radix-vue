<script lang="ts">
import { PrimitiveLabel } from "@/Primitive";

interface DropdownMenuLabelProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuLabelProps>();
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
