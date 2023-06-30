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
  handleSizeChange: (payload: Sizes) => void;
  onThumbPositionChange: () => void;
  onThumbChange: (element: HTMLElement) => void;
}

export const SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY =
  "ScrollAreaScrollbarVisible" as const;
</script>

<script setup lang="ts">
import { computed, inject, ref, provide, type Ref } from "vue";
import type { Sizes } from "./types";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";
import {
  type ScrollAreaScollbarProvideValue,
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY,
} from "./ScrollAreaScrollbar.vue";
import ScrollAreaScrollbarX from "./ScrollAreaScrollbarX.vue";
import ScrollAreaScrollbarY from "./ScrollAreaScrollbarY.vue";
import { getThumbOffsetFromScroll, getThumbRatio } from "./utils";

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
});

const hasThumb = computed(() => {
  const thumbRatio = getThumbRatio(sizes.value.viewport, sizes.value.content);
  return Boolean(thumbRatio > 0 && thumbRatio < 1);
});

const thumbRef = ref<HTMLElement>();

const handleWheelScroll = (event: MouseEvent) => {
  console.log(event);
};
const handleThumbDown = (event: MouseEvent) => {
  console.log(event);
};
const handleThumbUp = (event: MouseEvent) => {
  console.log(event);
};

const handleSizeChange = (payload: Sizes) => {
  sizes.value = payload;
};

const isShowingScrollbarX = computed(
  () => injectedValueFromScrollbar?.isHorizontal.value
);
const onThumbPositionChange = () => {
  if (isShowingScrollbarX.value) {
    if (injectedValueFromRoot?.viewport.value && thumbRef.value) {
      const scrollPos = injectedValueFromRoot?.viewport.value.scrollLeft;
      const offset = getThumbOffsetFromScroll(
        scrollPos,
        sizes.value,
        injectedValueFromRoot?.dir
      );
      thumbRef.value.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  } else {
    if (injectedValueFromRoot?.viewport.value && thumbRef.value) {
      const scrollPos = injectedValueFromRoot?.viewport.value.scrollTop;
      const offset = getThumbOffsetFromScroll(scrollPos, sizes.value);
      thumbRef.value.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  }
};
const onThumbChange = (element: HTMLElement) => {
  thumbRef.value = element;
};

provide<ScrollAreaScrollbarVisibleProvideValue>(
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
  {
    sizes,
    hasThumb,
    handleWheelScroll,
    handleThumbDown,
    handleThumbUp,
    handleSizeChange,
    onThumbPositionChange,
    onThumbChange,
  }
);
</script>

<template>
  <ScrollAreaScrollbarX v-if="isShowingScrollbarX">
    <slot></slot>
  </ScrollAreaScrollbarX>
  <ScrollAreaScrollbarY v-else>
    <slot></slot>
  </ScrollAreaScrollbarY>
</template>
