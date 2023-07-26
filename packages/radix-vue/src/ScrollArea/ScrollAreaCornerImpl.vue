<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
import { useResizeObserver } from "@vueuse/core";

const context = inject(SCROLL_AREA_INJECTION_KEY);

const width = ref(0);
const height = ref(0);

const hasSize = computed(() => !!width.value && !!height.value);

useResizeObserver(context?.scrollbarX.value, () => {
  const offsetHeight = context?.scrollbarX.value?.offsetHeight || 0;
  context?.onCornerHeightChange(offsetHeight);
  height.value = offsetHeight;
});

useResizeObserver(context?.scrollbarY.value, () => {
  const offsetWidth = context?.scrollbarY.value?.offsetWidth || 0;
  context?.onCornerWidthChange(offsetWidth);
  width.value = offsetWidth;
});
</script>

<template>
  <PrimitiveDiv
    v-if="hasSize"
    :style="{
      width: width + 'px',
      height: height + 'px',
      position: 'absolute',
      right: context!.dir.value === 'ltr' ? 0 : undefined,
      left: context!.dir.value === 'rtl' ? 0 : undefined,
      bottom: 0,
    }"
    v-bind="$parent?.$props"
  >
    <slot></slot>
  </PrimitiveDiv>
</template>
