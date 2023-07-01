<script setup lang="ts">
import { computed, inject } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";
import {
  type ScrollAreaScollbarProvideValue,
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY,
} from "./ScrollAreaScrollbar.vue";
import ScrollAreaScrollbarVisible from "./ScrollAreaScrollbarVisible.vue";
import { useDebounceFn, useResizeObserver } from "@vueuse/core";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);
const injectedValueFromScrollbar = inject<ScrollAreaScollbarProvideValue>(
  SCROLL_AREA_SCROLLBAR_INJECTION_KEY
);

const visible = computed(() => injectedValueFromScrollbar?.visible.value);

const handleResize = useDebounceFn(() => {
  if (injectedValueFromRoot?.viewport.value) {
    const isOverflowX =
      injectedValueFromRoot?.viewport.value.offsetWidth <
      injectedValueFromRoot?.viewport.value.scrollWidth;
    const isOverflowY =
      injectedValueFromRoot?.viewport.value.offsetHeight <
      injectedValueFromRoot?.viewport.value.scrollHeight;

    if (injectedValueFromScrollbar?.isHorizontal.value) {
      injectedValueFromScrollbar!.visible.value = isOverflowX;
    } else {
      injectedValueFromScrollbar!.visible.value = isOverflowY;
    }
  }
}, 10);

useResizeObserver(injectedValueFromRoot?.viewport, handleResize);
useResizeObserver(injectedValueFromRoot?.content, handleResize);
</script>

<template>
  <ScrollAreaScrollbarVisible
    v-if="visible"
    v-bind="$attrs"
    :data-state="visible ? 'visible' : 'hidden'"
  >
    <slot></slot>
  </ScrollAreaScrollbarVisible>
</template>
