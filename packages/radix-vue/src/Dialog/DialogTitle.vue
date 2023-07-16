<script setup lang="ts">
import { PrimitiveH2, type PrimitiveProps } from "@/Primitive";

export interface DialogTitleProps extends PrimitiveProps {}
const props = defineProps<DialogTitleProps>();
</script>

<template>
  <PrimitiveH2 v-bind="props"><slot /></PrimitiveH2>
</template>
