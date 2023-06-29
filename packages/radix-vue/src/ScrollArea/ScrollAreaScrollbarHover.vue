<script setup lang="ts">
import { inject, ref, watchEffect } from "vue";
import {
  ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

const injectedValue = inject<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY);

const visible = ref(false);

watchEffect(() => {
  const scrollArea = injectedValue?.scrollArea;
  let hideTimer = 0;
  if (scrollArea) {
    const handlePointerEnter = () => {
      window.clearTimeout(hideTimer);
      visible.value = true;
    };
    const handlePointerLeave = () => {
      hideTimer = window.setTimeout(() => {
        visible.value = false;
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
  <ScrollAreaScrollbarAuto :data-state="{ visible ? 'visible': 'hidden' }" />
</template>
