<script lang="ts">
type Orientation = "horizontal" | "vertical";

interface ToolbarSeparatorProps {
  orientation?: Orientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveDiv } from "@/Primitive";
const props = withDefaults(defineProps<ToolbarSeparatorProps>(), {
  orientation: "horizontal",
  decorative: false,
});
</script>

<template>
  <PrimitiveDiv
    :data-orientation="props.orientation"
    :role="`${decorative ? 'none' : 'separator'}`"
  ></PrimitiveDiv>
</template>
