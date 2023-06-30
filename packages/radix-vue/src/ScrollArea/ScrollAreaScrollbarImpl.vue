<script setup lang="ts">
import { computed, inject, ref, watchEffect } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

import {
  type ScrollAreaScrollbarVisibleProvideValue,
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
} from "./ScrollAreaScrollbarVisible.vue";
import { toInt } from "./utils";
import { useResizeObserver } from "@vueuse/core";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);
const injectedValueFromScrollbarVisible =
  inject<ScrollAreaScrollbarVisibleProvideValue>(
    SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
  );

const props = defineProps<{
  isHorizontal: boolean;
}>();

const emit = defineEmits<{
  (e: "onDragScroll", payload: { x: number; y: number }): void;
  (e: "onWheelScroll", payload: { x: number; y: number }): void;
  (e: "onThumbPointerDown", payload: { x: number; y: number }): void;
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
      injectedValueFromRoot.viewport.value!.style.scrollBehavior = "auto";

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
    injectedValueFromRoot.viewport.value!.style.scrollBehavior = "";

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

const handleSizeChange = () => {
  if (!scrollbar.value) return;
  if (props.isHorizontal) {
    injectedValueFromScrollbarVisible?.handleSizeChange({
      content: injectedValueFromRoot?.viewport.value?.scrollWidth ?? 0,
      viewport: injectedValueFromRoot?.viewport.value?.offsetWidth ?? 0,
      scrollbar: {
        size: scrollbar.value?.clientWidth ?? 0,
        paddingStart: toInt(getComputedStyle(scrollbar.value!).paddingLeft),
        paddingEnd: toInt(getComputedStyle(scrollbar.value!).paddingRight),
      },
    });
  } else {
    injectedValueFromScrollbarVisible?.handleSizeChange({
      content: injectedValueFromRoot?.viewport.value?.scrollHeight ?? 0,
      viewport: injectedValueFromRoot?.viewport.value?.offsetHeight ?? 0,
      scrollbar: {
        size: scrollbar.value?.clientHeight ?? 0,
        paddingStart: toInt(getComputedStyle(scrollbar.value!).paddingLeft),
        paddingEnd: toInt(getComputedStyle(scrollbar.value!).paddingRight),
      },
    });
  }
};

useResizeObserver(scrollbar, (ev) => {
  console.log({ ev }, "scrollbar");
  handleSizeChange();
});
useResizeObserver(injectedValueFromRoot?.content, (ev) => {
  console.log({ ev }, "content");
  handleSizeChange();
});

const sizes = computed(() => injectedValueFromScrollbarVisible?.sizes.value);
const isScrollbarNeeded = computed(() => {
  if (props.isHorizontal) {
    return (
      injectedValueFromRoot?.viewport.value?.scrollWidth !==
      injectedValueFromRoot?.viewport.value?.offsetWidth
    );
  } else {
    return (
      injectedValueFromRoot?.viewport.value?.scrollHeight !==
      injectedValueFromRoot?.viewport.value?.offsetHeight
    );
  }
});
</script>

<template>
  <div
    v-if="isScrollbarNeeded"
    ref="scrollbar"
    style="position: absolute"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
  >
    <template v-if="isScrollbarNeeded">
      <slot></slot>
    </template>
  </div>
</template>
