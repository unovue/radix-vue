<script lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";

interface SelectLabelProps extends PrimitiveProps {
  for?: string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<SelectLabelProps>(), {
  as: "label",
});
</script>

<template>
  <Primitive v-bind="props"><slot /></Primitive>
</template>
