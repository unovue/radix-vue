<script lang="ts">
import type { DataOrientation } from "../types";

export interface BaseSeparatorProps {
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
  ></PrimitiveDiv>
</template>
