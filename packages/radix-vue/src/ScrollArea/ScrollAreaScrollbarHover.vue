<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from "vue";
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
const visible = ref(false);

const handlePointerEnter = () => {
  window.clearTimeout(timeout);
  visible.value = true;
  console.log(injectedValueFromScrollbar);
};
const handlePointerLeave = () => {
  timeout = window.setTimeout(() => {
    visible.value = false;
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
    v-if="visible"
    v-bind="$attrs"
    :data-state="visible ? 'visible' : 'hidden'"
  >
    <slot></slot>
  </ScrollAreaScrollbarAuto>
</template>
