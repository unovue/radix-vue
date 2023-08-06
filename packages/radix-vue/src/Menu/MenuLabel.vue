<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

interface MenuLabelProps extends PrimitiveProps {}
const props = defineProps<MenuLabelProps>();
</script>

<template>
  <Primitive role="group" v-bind="props">
    <slot></slot>
  </Primitive>
</template>
