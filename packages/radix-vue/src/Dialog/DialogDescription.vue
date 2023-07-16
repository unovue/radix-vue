<script setup lang="ts">
import { PrimitiveP, type PrimitiveProps } from "@/Primitive";

export interface DialogDescriptionProps extends PrimitiveProps {}
const props = defineProps<DialogDescriptionProps>();
</script>

<template>
  <PrimitiveP v-bind="props"><slot /></PrimitiveP>
</template>
