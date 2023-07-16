<script lang="ts">
export interface DialogTitleProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PrimitiveH2, type PrimitiveProps } from "../Primitive";

const props = withDefaults(defineProps<DialogTitleProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveH2 v-bind="props"><slot /></PrimitiveH2>
</template>
