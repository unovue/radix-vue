<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref } from "vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import {
  type ScrollAreaScrollbarVisibleProvideValue,
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
} from "./ScrollAreaScrollbarVisible.vue";
import { SCROLL_AREA_SCROLLBAR_INJECTION_KEY } from "./ScrollAreaScrollbar.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { toInt } from "./utils";
import { useResizeObserver } from "@vueuse/core";

const rootContext = inject(SCROLL_AREA_INJECTION_KEY);
const scrollbarContextVisible = inject<ScrollAreaScrollbarVisibleProvideValue>(
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY
);

const scrollbarContext = inject(SCROLL_AREA_SCROLLBAR_INJECTION_KEY);

const props = defineProps<{
  isHorizontal: boolean;
}>();

const emit = defineEmits<{
  (e: "onDragScroll", payload: { x: number; y: number }): void;
  (e: "onWheelScroll", payload: { x: number; y: number }): void;
  (e: "onThumbPointerDown", payload: { x: number; y: number }): void;
}>();

const { primitiveElement, currentElement: scrollbar } = usePrimitiveElement();
const prevWebkitUserSelectRef = ref("");
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
    if (rootContext?.viewport)
      rootContext.viewport.value!.style.scrollBehavior = "auto";

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
  if (rootContext?.viewport)
    rootContext.viewport.value!.style.scrollBehavior = "";

  rectRef.value = undefined;
};

const handleWheel = (event: WheelEvent) => {
  if (!scrollbarContextVisible) return;
  const element = event.target as HTMLElement;
  const isScrollbarWheel = scrollbar.value?.contains(element);
  const maxScrollPos =
    scrollbarContextVisible.sizes.value.content -
    scrollbarContextVisible.sizes.value.viewport;
  if (isScrollbarWheel)
    scrollbarContextVisible.handleWheelScroll(event, maxScrollPos);
};

onMounted(() => {
  document.addEventListener("wheel", handleWheel, { passive: false });
});
onUnmounted(() => {
  document.removeEventListener("wheel", handleWheel);
});

const handleSizeChange = () => {
  if (!scrollbar.value) return;
  if (props.isHorizontal) {
    scrollbarContextVisible?.handleSizeChange({
      content: rootContext?.viewport.value?.scrollWidth ?? 0,
      viewport: rootContext?.viewport.value?.offsetWidth ?? 0,
      scrollbar: {
        size: scrollbar.value?.clientWidth ?? 0,
        paddingStart: toInt(getComputedStyle(scrollbar.value!).paddingLeft),
        paddingEnd: toInt(getComputedStyle(scrollbar.value!).paddingRight),
      },
    });
  } else {
    scrollbarContextVisible?.handleSizeChange({
      content: rootContext?.viewport.value?.scrollHeight ?? 0,
      viewport: rootContext?.viewport.value?.offsetHeight ?? 0,
      scrollbar: {
        size: scrollbar.value?.clientHeight ?? 0,
        paddingStart: toInt(getComputedStyle(scrollbar.value!).paddingLeft),
        paddingEnd: toInt(getComputedStyle(scrollbar.value!).paddingRight),
      },
    });
  }
};

useResizeObserver(scrollbar, handleSizeChange);
useResizeObserver(rootContext?.content, handleSizeChange);
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    style="position: absolute"
    data-scrollbarimpl
    :as-child="scrollbarContext?.asChild.value"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
  >
    <slot></slot>
  </PrimitiveDiv>
</template>
