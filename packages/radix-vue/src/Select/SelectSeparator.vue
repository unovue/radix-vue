<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

export interface SelectSeparatorProps extends PrimitiveProps {}
const props = defineProps<SelectSeparatorProps>();
</script>

<template>
  <Primitive aria-hidden v-bind="props">
    <slot></slot>
  </Primitive>
</template>
