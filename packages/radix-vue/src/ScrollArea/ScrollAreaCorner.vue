<script setup lang="ts">
import { computed, inject } from "vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import { type PrimitiveProps } from "@/Primitive";
import ScrollAreaCornerImpl from "./ScrollAreaCornerImpl.vue";

export interface ScrollAreaCornerProps extends PrimitiveProps {}
const props = defineProps<ScrollAreaCornerProps>();

const context = inject(SCROLL_AREA_INJECTION_KEY);

const hasBothScrollbarsVisible = computed(
  () => !!context?.scrollbarX.value && !!context.scrollbarY.value
);
const hasCorner = computed(
  () => context?.type.value !== "scroll" && hasBothScrollbarsVisible.value
);
</script>

<template>
  <ScrollAreaCornerImpl v-if="hasCorner" v-bind="props">
    <slot></slot>
  </ScrollAreaCornerImpl>
</template>
