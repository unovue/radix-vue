<script lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

interface ContextMenuLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ContextMenuLabelProps>(), {
  as: "label",
});
</script>

<template>
  <Primitive v-bind="props"><slot /></Primitive>
</template>
