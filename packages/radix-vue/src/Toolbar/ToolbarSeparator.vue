<script lang="ts">
import BaseSeparator from "@/shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";

export interface BaseSeparatorProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = defineProps<BaseSeparatorProps>();
</script>

<template>
  <BaseSeparator
    :orientation="props.orientation"
    :decorative="props.decorative"
  />
</template>
