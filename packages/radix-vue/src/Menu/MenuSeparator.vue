<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

interface MenuSeparatorProps extends PrimitiveProps {}

const props = defineProps<MenuSeparatorProps>();
</script>

<template>
  <Primitive v-bind="props" role="separator" aria-orientation="horizontal">
    <slot></slot>
  </Primitive>
</template>
