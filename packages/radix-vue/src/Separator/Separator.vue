<script lang="ts">
import BaseSeparator from "../shared/component/BaseSeparator.vue";
import type { DataOrientation } from "../shared/types";
import { type PrimitiveProps } from "@/Primitive";

export interface BaseSeparatorProps extends PrimitiveProps {
  orientation?: DataOrientation;
  decorative?: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BaseSeparatorProps>(), {
  orientation: "horizontal",
});
</script>

<template>
  <BaseSeparator v-bind="props" :data-orientation="props.orientation" />
</template>
