<script setup lang="ts">
import { inject, watchEffect } from "vue";
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

watchEffect(() => {
  const scrollArea = injectedValue?.scrollArea.value;
  let hideTimer = 0;
  if (scrollArea) {
    const handlePointerEnter = () => {
      window.clearTimeout(hideTimer);
      injectedValueFromScrollbar!.visible.value = true;
    };
    const handlePointerLeave = () => {
      hideTimer = window.setTimeout(() => {
        injectedValueFromScrollbar!.visible.value = false;
      }, injectedValue?.scrollHideDelay);
    };
    scrollArea.addEventListener("pointerenter", handlePointerEnter);
    scrollArea.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      window.clearTimeout(hideTimer);
      scrollArea.removeEventListener("pointerenter", handlePointerEnter);
      scrollArea.removeEventListener("pointerleave", handlePointerLeave);
    };
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
