<script lang="ts">
export interface ScrollAreaScrollbarVisibleProvideValue {
  sizes: Ref<Sizes>;
  hasThumb: Ref<boolean>;
  handleWheelScroll: (event: MouseEvent, payload: number) => void;
  handleThumbDown: (
    event: MouseEvent,
    payload: { x: number; y: number }
  ) => void;
  handleThumbUp: (event: MouseEvent) => void;
}

export const SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY =
  "ScrollAreaScrollbarVisible" as const;
</script>

<script setup lang="ts">
import { computed, inject, ref, provide, type Ref } from "vue";
import {
  type Sizes,
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


 const sizes = ref<Sizes>({
  content: 0,
  viewport: 0,
  scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
 })


function getThumbRatio(viewportSize: number, contentSize: number) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}

const hasThumb = computed(() => {
  const thumbRatio = getThumbRatio(sizes.value.viewport, sizes.value.content)
  return Boolean(thumbRatio > 0 && thumbRatio < 1),
})


const handleWheelScroll =(event: MouseEvent) => {
  console.log(event)
}
const handleThumbDown =(event: MouseEvent) => {
  console.log(event)
}
const handleThumbUp =(event: MouseEvent) => {
  console.log(event)
}

provide<ScrollAreaScrollbarVisibleProvideValue>(SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY, {
  sizes,
  hasThumb,
  handleWheelScroll,
  handleThumbDown,
  handleThumbUp
})
</script>

<template>
  <ScrollAreaScrollbarX
    v-if="injectedValueFromScrollbar?.isHorizontal"
  ></ScrollAreaScrollbarX>
  <ScrollAreaScrollbarY v-else></ScrollAreaScrollbarY>
</template>
