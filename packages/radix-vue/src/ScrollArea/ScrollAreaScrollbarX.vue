<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import {
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
  type ScrollAreaScrollbarVisibleProvideValue,
} from "./ScrollAreaScrollbarVisible.vue";
import {
  SCROLL_AREA_INJECTION_KEY,
  type ScrollAreaProvideValue,
} from "./ScrollAreaRoot.vue";
import ScrollAreaScrollbarImpl from "./ScrollAreaScrollbarImpl.vue";
import { getThumbSize } from "./utils";
import { unrefElement } from "@vueuse/core";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);

const injectedValueFromScrollbarVisible =
  inject<ScrollAreaScrollbarVisibleProvideValue>(
    SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
  );

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
    :is-horizontal="true"
    data-orientation="horizontal"
    ref="scrollbarElement"
    @on-drag-scroll="injectedValueFromScrollbarVisible?.onDragScroll($event.x)"
    :style="{
        bottom: 0,
        left: injectedValueFromRoot?.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
        right: injectedValueFromRoot?.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
        ['--radix-scroll-area-thumb-width' as any]: sizes ? getThumbSize(sizes) + 'px' : undefined,
      }"
  >
    <slot></slot>
  </ScrollAreaScrollbarImpl>
</template>
