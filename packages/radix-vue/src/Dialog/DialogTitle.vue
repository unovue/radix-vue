<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

export interface DialogTitleProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogTitleProps>(), { as: "h2" });
</script>

<template>
  <Primitive v-bind="props"><slot /></Primitive>
</template>
