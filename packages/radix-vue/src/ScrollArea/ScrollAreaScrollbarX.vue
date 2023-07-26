<script setup lang="ts">
import { computed, inject, onMounted } from "vue";
import {
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
  type ScrollAreaScrollbarVisibleProvideValue,
} from "./ScrollAreaScrollbarVisible.vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import ScrollAreaScrollbarImpl from "./ScrollAreaScrollbarImpl.vue";
import { getThumbSize } from "./utils";
import { usePrimitiveElement } from "@/Primitive";

const rootContext = inject(SCROLL_AREA_INJECTION_KEY);

const scrollbarContextVisible = inject<ScrollAreaScrollbarVisibleProvideValue>(
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
);

const { primitiveElement, currentElement: scrollbarElement } =
  usePrimitiveElement();

onMounted(() => {
  if (scrollbarElement.value)
    rootContext?.onScrollbarXChange(scrollbarElement.value);
});
const sizes = computed(() => scrollbarContextVisible?.sizes.value);
</script>

<template>
  <ScrollAreaScrollbarImpl
    :is-horizontal="true"
    data-orientation="horizontal"
    ref="primitiveElement"
    @on-drag-scroll="scrollbarContextVisible?.onDragScroll($event.x)"
    :style="{
        bottom: 0,
        left: rootContext?.dir?.value === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
        right: rootContext?.dir?.value === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
        ['--radix-scroll-area-thumb-width' as any]: sizes ? getThumbSize(sizes) + 'px' : undefined,
      }"
  >
    <slot></slot>
  </ScrollAreaScrollbarImpl>
</template>
