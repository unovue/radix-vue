<script setup lang="ts">
import { inject, ref, watchEffect } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

import {
  type ScrollAreaScrollbarVisibleProvideValue,
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
} from "./ScrollAreaScrollbarVisible.vue";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);
const injectedValueFromScrollbarVisible =
  inject<ScrollAreaScrollbarVisibleProvideValue>(
    SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
  );

const emit = defineEmits<{
  (e: "onDragScroll", payload: { x: number; y: number }): void;
}>();

const prevWebkitUserSelectRef = ref("");
const scrollbar = ref<HTMLElement>();
const rectRef = ref<DOMRect>();

function handleDragScroll(event: MouseEvent) {
  if (rectRef.value) {
    const x = event.clientX - rectRef.value?.left;
    const y = event.clientY - rectRef.value?.top;
    emit("onDragScroll", { x, y });
  }
}

const handlePointerDown = (event: PointerEvent) => {
  const mainPointer = 0;
  if (event.button === mainPointer) {
    const element = event.target as HTMLElement;
    element.setPointerCapture(event.pointerId);
    rectRef.value = scrollbar.value!.getBoundingClientRect();

    // pointer capture doesn't prevent text selection in Safari
    // so we remove text selection manually when scrolling
    prevWebkitUserSelectRef.value = document.body.style.webkitUserSelect;
    document.body.style.webkitUserSelect = "none";
    if (injectedValueFromRoot?.viewport)
      injectedValueFromRoot.viewport.style.scrollBehavior = "auto";

    handleDragScroll(event);
  }
};

const handlePointerMove = (event: PointerEvent) => {
  handleDragScroll(event);
};

const handlePointerUp = (event: PointerEvent) => {
  const element = event.target as HTMLElement;
  if (element.hasPointerCapture(event.pointerId)) {
    element.releasePointerCapture(event.pointerId);
  }
  document.body.style.webkitUserSelect = prevWebkitUserSelectRef.value;
  if (injectedValueFromRoot?.viewport)
    injectedValueFromRoot.viewport.style.scrollBehavior = "";

  rectRef.value = undefined;
};

watchEffect(() => {
  if (!injectedValueFromScrollbarVisible) return;
  const handleWheel = (event: WheelEvent) => {
    const element = event.target as HTMLElement;
    const isScrollbarWheel = scrollbar.value?.contains(element);
    const maxScrollPos =
      injectedValueFromScrollbarVisible.sizes.value.content -
      injectedValueFromScrollbarVisible.sizes.value.viewport;
    if (isScrollbarWheel)
      injectedValueFromScrollbarVisible.handleWheelScroll(event, maxScrollPos);
  };
  document.addEventListener("wheel", handleWheel, { passive: false });
  return () =>
    document.removeEventListener("wheel", handleWheel, {
      passive: false,
    } as any);
});

/**
 * Update thumb position on sizes change
 */
//    React.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);

// useResizeObserver(scrollbar, handleResize);
// useResizeObserver(context.content, handleResize);
</script>

<template>
  <div
    style="position: absolute"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
  ></div>
</template>
