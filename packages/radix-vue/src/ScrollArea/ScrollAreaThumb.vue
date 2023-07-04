<script setup lang="ts">
import { PrimitiveDiv, usePrimitiveElement } from "../Primitive";
import { computed, inject, onUnmounted, ref } from "vue";
import { addUnlinkedScrollListener } from "./utils";

import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

import {
  type ScrollAreaScrollbarVisibleProvideValue,
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
} from "./ScrollAreaScrollbarVisible.vue";
import { watchOnce } from "@vueuse/core";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);

const injectedValueFromScrollbarVisible =
  inject<ScrollAreaScrollbarVisibleProvideValue>(
    SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
  );

const handlePointerDown = (event: MouseEvent) => {
  const thumb = event.target as HTMLElement;
  const thumbRect = thumb.getBoundingClientRect();
  const x = event.clientX - thumbRect.left;
  const y = event.clientY - thumbRect.top;
  injectedValueFromScrollbarVisible?.handleThumbDown(event, { x, y });
};

const handlePointerUp = (event: MouseEvent) => {
  injectedValueFromScrollbarVisible?.handleThumbUp(event);
};

const { primitiveElement, currentElement: thumbElement } =
  usePrimitiveElement();
const removeUnlinkedScrollListenerRef = ref<() => void>();
const viewport = computed(() => injectedValueFromRoot?.viewport.value);

const handleScroll = () => {
  if (!removeUnlinkedScrollListenerRef.value) {
    const listener = addUnlinkedScrollListener(
      viewport.value!,
      injectedValueFromScrollbarVisible?.onThumbPositionChange
    );
    removeUnlinkedScrollListenerRef.value = listener;
    injectedValueFromScrollbarVisible?.onThumbPositionChange();
  }
};

const sizes = computed(() => injectedValueFromScrollbarVisible?.sizes.value);

watchOnce(sizes, () => {
  injectedValueFromScrollbarVisible?.onThumbChange(thumbElement.value!);
  if (viewport.value) {
    /**
     * We only bind to native scroll event so we know when scroll starts and ends.
     * When scroll starts we start a requestAnimationFrame loop that checks for
     * changes to scroll position. That rAF loop triggers our thumb position change
     * when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
     * https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
     */
    injectedValueFromScrollbarVisible?.onThumbPositionChange();
    viewport.value.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  viewport.value!.removeEventListener("scroll", handleScroll);
  injectedValueFromRoot?.viewport.value?.removeEventListener(
    "scroll",
    handleScroll
  );
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    :data-state="
      injectedValueFromScrollbarVisible?.hasThumb ? 'visible' : 'hidden'
    "
    :style="{
      width: 'var(--radix-scroll-area-thumb-width)',
      height: 'var(--radix-scroll-area-thumb-height)',
    }"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  />
</template>
