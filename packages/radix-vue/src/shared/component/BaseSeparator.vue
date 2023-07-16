<script lang="ts">
import type { DataOrientation } from "../types";
import { type PrimitiveProps } from "@/Primitive";

export interface BaseSeparatorProps extends PrimitiveProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";

const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  orientation: "horizontal",
});
</script>

<template>
  <PrimitiveDiv
    :data-orientation="props.orientation"
    :role="`${decorative ? 'none' : 'separator'}`"
  >
    <slot></slot>
  </PrimitiveDiv>
</template>
