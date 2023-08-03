<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

export interface DialogDescriptionProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogDescriptionProps>(), { as: "p" });
</script>

<template>
  <Primitive v-bind="props"><slot /></Primitive>
</template>
