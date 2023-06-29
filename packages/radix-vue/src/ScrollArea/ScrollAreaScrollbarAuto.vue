<script setup lang="ts">
import { computed, inject, ref } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";
import {
  type ScrollAreaScollbarProvideValue,
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY,
} from "./ScrollAreaScrollbar.vue";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);
const injectedValueFromScrollbar = inject<ScrollAreaScollbarProvideValue>(
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY
);

const visible = ref(false);
injectedValueFromScrollbar?.isHorizontal.value;

// const handleResize = useDebounceCallback(() => {
//     if (context.viewport) {
//       const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
//       const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
//       setVisible(isHorizontal ? isOverflowX : isOverflowY);
//     }
//   }, 10);

//   useResizeObserver(context.viewport, handleResize);
//   useResizeObserver(context.content, handleResize);
</script>

<template>
  <ScrollAreaScrollbarVisible :data-state="{ visible? 'visible': 'hidden' }" />
</template>
