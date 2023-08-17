<script lang="ts">
import type { DataOrientation } from "../types";
import { type PrimitiveProps } from "@/Primitive";

export interface BaseSeparatorProps extends PrimitiveProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
import { Primitive } from "@/Primitive";

const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  asChild: false,
  orientation: "horizontal",
});
</script>

<template>
  <Primitive
    v-bind="props"
    :data-orientation="props.orientation"
    :role="`${props.decorative ? 'none' : 'separator'}`"
  ></Primitive>
</template>
