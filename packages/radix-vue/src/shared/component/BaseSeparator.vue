<script lang="ts">
import type { DataOrientation } from "../types";

export interface BaseSeparatorProps {
  asChild?: boolean;
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";

const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  asChild: false,
  orientation: "horizontal",
});
</script>

<template>
  <PrimitiveDiv
    :asChild="props.asChild"
    :data-orientation="props.orientation"
    :role="`${props.decorative ? 'none' : 'separator'}`"
  ></PrimitiveDiv>
</template>
