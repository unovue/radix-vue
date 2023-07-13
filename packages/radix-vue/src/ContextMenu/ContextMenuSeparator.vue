<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";

export interface ContextMenuSeparatorProps {
  orientation?: DataOrientation;
  decorative?: boolean;
  asChild?: boolean;
}
</script>

<script setup lang="ts">
const props = defineProps<ContextMenuSeparatorProps>();
</script>

<template>
  <BaseSeparator
    :orientation="props.orientation"
    :decorative="props.decorative"
  />
</template>
