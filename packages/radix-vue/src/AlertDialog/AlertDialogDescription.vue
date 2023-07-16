<script setup lang="ts">
import { PrimitiveP, type PrimitiveProps } from "@/Primitive";

export interface AlertDialogDescriptionProps extends PrimitiveProps {}
const props = defineProps<AlertDialogDescriptionProps>();
</script>

<template>
  <PrimitiveP v-bind="props"><slot /></PrimitiveP>
</template>
