<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";

export interface SelectSeparatorProps {
  orientation?: DataOrientation;
  decorative?: boolean;
  asChild?: boolean;
}
</script>

<script setup lang="ts">
const props = defineProps<SelectSeparatorProps>();
</script>

<template>
  <BaseSeparator
    :orientation="props.orientation"
    :decorative="props.decorative"
  />
</template>
