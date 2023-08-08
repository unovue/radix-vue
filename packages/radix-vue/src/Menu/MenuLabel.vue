<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

export interface MenuLabelProps extends PrimitiveProps {}
const props = withDefaults(defineProps<MenuLabelProps>(), {
  as: "label",
});
</script>

<template>
  <Primitive role="group" v-bind="props">
    <slot></slot>
  </Primitive>
</template>
