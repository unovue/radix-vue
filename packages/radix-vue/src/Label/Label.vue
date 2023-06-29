<script setup lang="ts">
import { PrimitiveLabel } from "@/Primitive";

const props = defineProps({
  for: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <PrimitiveLabel :for="props.for"><slot /></PrimitiveLabel>
</template>
