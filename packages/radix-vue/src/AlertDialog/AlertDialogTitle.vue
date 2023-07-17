<script setup lang="ts">
import { PrimitiveH2, type PrimitiveProps } from "@/Primitive";

export interface AlertDialogTitleProps extends PrimitiveProps {}
const props = defineProps<AlertDialogTitleProps>();
</script>

<template>
  <PrimitiveH2 v-bind="props"><slot /></PrimitiveH2>
</template>
