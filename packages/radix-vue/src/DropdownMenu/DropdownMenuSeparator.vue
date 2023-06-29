<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";

export interface DropdownMenuSeparatorProps {
  orientation?: DataOrientation;
  decorative?: boolean;
  asChild?: boolean;
}
</script>

<script setup lang="ts">
const props = defineProps<DropdownMenuSeparatorProps>();
</script>

<template>
  <BaseSeparator
    :orientation="props.orientation"
    :decorative="props.decorative"
  />
</template>
