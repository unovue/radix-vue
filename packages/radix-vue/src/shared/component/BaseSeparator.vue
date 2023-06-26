<script lang="ts">
import type { DataOrientation } from "../types";

export interface BaseSeparatorProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  orientation: "horizontal"
})''
</script>

<template>
  <div
    :data-orientation="props.orientation"
    :role="`${decorative ? 'none' : 'separator'}`"
  ></div>
</template>
