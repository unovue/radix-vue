<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";

export interface BaseSeparatorProps {
  asChild?: boolean;
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  asChild: false,
  orientation: "horizontal",
});
</script>

<template>
  <BaseSeparator
    :orientation="props.orientation"
    :decorative="props.decorative"
    :data-orientation="props.orientation"
  />
</template>
