<script setup lang="ts">
import { inject, onMounted, onUnmounted } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";
import {
  type ScrollAreaScollbarProvideValue,
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY,
} from "./ScrollAreaScrollbar.vue";

import ScrollAreaScrollbarAuto from "./ScrollAreaScrollbarAuto.vue";

const injectedValue = inject<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY);

const injectedValueFromScrollbar = inject<ScrollAreaScollbarProvideValue>(
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY
);

let timeout: ReturnType<typeof setTimeout> | undefined | number;

const handlePointerEnter = () => {
  window.clearTimeout(timeout);
  injectedValueFromScrollbar!.visible.value = true;
};
const handlePointerLeave = () => {
  timeout = window.setTimeout(() => {
    injectedValueFromScrollbar!.visible.value = false;
  }, injectedValue?.scrollHideDelay);
};

onMounted(() => {
  const scrollArea = injectedValue?.scrollArea.value;

  if (scrollArea) {
    scrollArea.addEventListener("pointerenter", handlePointerEnter);
    scrollArea.addEventListener("pointerleave", handlePointerLeave);
  }
});

onUnmounted(() => {
  const scrollArea = injectedValue?.scrollArea.value;
  if (scrollArea) {
    window.clearTimeout(timeout);
    scrollArea.removeEventListener("pointerenter", handlePointerEnter);
    scrollArea.removeEventListener("pointerleave", handlePointerLeave);
  }
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <ScrollAreaScrollbarAuto
    v-bind="$attrs"
    :data-state="
      injectedValueFromScrollbar?.visible.value ? 'visible' : 'hidden'
    "
  >
    <slot></slot>
  </ScrollAreaScrollbarAuto>
</template>
