<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import type { Sizes } from "./types";
import {
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
  type ScrollAreaScrollbarVisibleProvideValue,
} from "./ScrollAreaScrollbarVisible.vue";
import {
  SCROLL_AREA_INJECTION_KEY,
  type ScrollAreaProvideValue,
} from "./ScrollAreaRoot.vue";
import ScrollAreaScrollbarImpl from "./ScrollAreaScrollbarImpl.vue";
import { getThumbRatio } from "./utils";
import { unrefElement } from "@vueuse/core";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);

const injectedValueFromScrollbarVisible =
  inject<ScrollAreaScrollbarVisibleProvideValue>(
    SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
  );

function getThumbSize(sizes: Sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding =
    sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  // minimum of 18 matches macOS minimum
  return Math.max(thumbSize, 18);
}

const scrollbarElement = ref<HTMLElement>();

onMounted(() => {
  if (scrollbarElement.value)
    injectedValueFromRoot?.onScrollbarYChange(
      unrefElement(scrollbarElement) ?? null
    );
});

const sizes = computed(() => injectedValueFromScrollbarVisible?.sizes.value);
</script>

<template>
  <ScrollAreaScrollbarImpl
    data-orientation="vertical"
    ref="scrollbarElement"
    :style="{
        top: 0,
        right: injectedValueFromRoot?.dir === 'ltr' ? 0 : undefined,
        left: injectedValueFromRoot?.dir === 'rtl' ? 0 : undefined,
        bottom: 'var(--radix-scroll-area-corner-height)',
        ['--radix-scroll-area-thumb-height' as any]: sizes ?  getThumbSize(sizes) + 'px' : undefined,
      }"
  >
    <slot></slot>
  </ScrollAreaScrollbarImpl>
</template>
