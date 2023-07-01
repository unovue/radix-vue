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
    :is-horizontal="false"
    data-orientation="vertical"
    ref="scrollbarElement"
    @on-drag-scroll="injectedValueFromScrollbarVisible?.onDragScroll($event.y)"
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
