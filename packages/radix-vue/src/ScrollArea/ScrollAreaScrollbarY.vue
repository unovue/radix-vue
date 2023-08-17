<script setup lang="ts">
import { computed, inject, onMounted } from "vue";
import { SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY } from "./ScrollAreaScrollbarVisible.vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import ScrollAreaScrollbarImpl from "./ScrollAreaScrollbarImpl.vue";
import { getThumbSize } from "./utils";
import { usePrimitiveElement } from "@/Primitive";

const rootContext = inject(SCROLL_AREA_INJECTION_KEY);

const scrollbarContextVisible = inject(
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
);

const { primitiveElement, currentElement: scrollbarElement } =
  usePrimitiveElement();

onMounted(() => {
  if (scrollbarElement.value)
    rootContext?.onScrollbarYChange(scrollbarElement.value);
});

const sizes = computed(() => scrollbarContextVisible?.sizes.value);
</script>

<template>
  <ScrollAreaScrollbarImpl
    :is-horizontal="false"
    data-orientation="vertical"
    ref="primitiveElement"
    @on-drag-scroll="scrollbarContextVisible?.onDragScroll($event.y)"
    :style="{
        top: 0,
        right: rootContext?.dir?.value === 'ltr' ? 0 : undefined,
        left: rootContext?.dir?.value === 'rtl' ? 0 : undefined,
        bottom: 'var(--radix-scroll-area-corner-height)',
        ['--radix-scroll-area-thumb-height' as any]: sizes ?  getThumbSize(sizes) + 'px' : undefined,
      }"
  >
    <slot></slot>
  </ScrollAreaScrollbarImpl>
</template>
