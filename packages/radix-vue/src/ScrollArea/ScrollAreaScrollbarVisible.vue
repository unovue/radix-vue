<script lang="ts">
export interface ScrollAreaScrollbarVisibleProvideValue {
  sizes: Ref<Sizes>;
  hasThumb: Ref<boolean>;
  handleWheelScroll: (event: WheelEvent, payload: number) => void;
  handleThumbDown: (
    event: MouseEvent,
    payload: { x: number; y: number }
  ) => void;
  handleThumbUp: (event: MouseEvent) => void;
  handleSizeChange: (payload: Sizes) => void;
  onThumbPositionChange: () => void;
  onDragScroll: (payload: number) => void;
  onThumbChange: (element: HTMLElement) => void;
}

export const SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY =
  Symbol() as InjectionKey<ScrollAreaScrollbarVisibleProvideValue>;
</script>

<script setup lang="ts">
import {
  computed,
  inject,
  ref,
  provide,
  type Ref,
  type InjectionKey,
  useAttrs,
} from "vue";
import type { Sizes, Direction } from "./types";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import { SCROLL_AREA_SCROLLBAR_INJECTION_KEY } from "./ScrollAreaScrollbar.vue";
import ScrollAreaScrollbarX from "./ScrollAreaScrollbarX.vue";
import ScrollAreaScrollbarY from "./ScrollAreaScrollbarY.vue";
import {
  getThumbOffsetFromScroll,
  getThumbRatio,
  getScrollPositionFromPointer,
  isScrollingWithinScrollbarBounds,
} from "./utils";

const rootContext = inject(SCROLL_AREA_INJECTION_KEY);
const scrollbarContext = inject(SCROLL_AREA_SCROLLBAR_INJECTION_KEY);

const sizes = ref<Sizes>({
  content: 0,
  viewport: 0,
  scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
});

const hasThumb = computed(() => {
  const thumbRatio = getThumbRatio(sizes.value.viewport, sizes.value.content);
  return Boolean(thumbRatio > 0 && thumbRatio < 1);
});

const thumbRef = ref<HTMLElement>();
const pointerOffset = ref(0);

const handleWheelScroll = (event: WheelEvent, payload: number) => {
  if (isShowingScrollbarX.value) {
    const scrollPos = rootContext!.viewport.value!.scrollLeft + event.deltaY;

    rootContext!.viewport.value!.scrollLeft = scrollPos;
    // prevent window scroll when wheeling on scrollbar
    if (isScrollingWithinScrollbarBounds(scrollPos, payload)) {
      event.preventDefault();
    }
  } else {
    const scrollPos = rootContext!.viewport.value!.scrollTop + event.deltaY;

    rootContext!.viewport.value!.scrollTop = scrollPos;
    // prevent window scroll when wheeling on scrollbar
    if (isScrollingWithinScrollbarBounds(scrollPos, payload)) {
      event.preventDefault();
    }
  }
};

const handleThumbDown = (
  event: MouseEvent,
  payload: { x: number; y: number }
) => {
  if (isShowingScrollbarX.value) {
    pointerOffset.value = payload.x;
  } else {
    pointerOffset.value = payload.y;
  }
};
const handleThumbUp = (event: MouseEvent) => {
  pointerOffset.value = 0;
};

const handleSizeChange = (payload: Sizes) => {
  sizes.value = payload;
};

function getScrollPosition(pointerPos: number, dir?: Direction) {
  return getScrollPositionFromPointer(
    pointerPos,
    pointerOffset.value,
    sizes.value,
    dir
  );
}

const isShowingScrollbarX = computed(
  () => scrollbarContext?.isHorizontal.value
);

const onDragScroll = (payload: number) => {
  if (isShowingScrollbarX.value) {
    rootContext!.viewport.value!.scrollLeft = getScrollPosition(
      payload,
      rootContext!.dir?.value
    );
  } else {
    rootContext!.viewport.value!.scrollTop = getScrollPosition(payload);
  }
};

const onThumbPositionChange = () => {
  if (isShowingScrollbarX.value) {
    if (rootContext?.viewport.value && thumbRef.value) {
      const scrollPos = rootContext?.viewport.value.scrollLeft;
      const offset = getThumbOffsetFromScroll(
        scrollPos,
        sizes.value,
        rootContext?.dir?.value
      );
      thumbRef.value.style.transform = `translate3d(${offset}px, 0, 0)`;
    }
  } else {
    if (rootContext?.viewport.value && thumbRef.value) {
      const scrollPos = rootContext?.viewport.value.scrollTop;
      const offset = getThumbOffsetFromScroll(scrollPos, sizes.value);
      thumbRef.value.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  }
};
const onThumbChange = (element: HTMLElement) => {
  thumbRef.value = element;
};

provide<ScrollAreaScrollbarVisibleProvideValue>(
  SCROLL_AREA_SCROLLBAR_VISIBLE_INJECTION_KEY,
  {
    sizes,
    hasThumb,
    handleWheelScroll,
    handleThumbDown,
    handleThumbUp,
    handleSizeChange,
    onThumbPositionChange,
    onThumbChange,
    onDragScroll,
  }
);
</script>

<template>
  <ScrollAreaScrollbarX v-bind="$attrs" v-if="isShowingScrollbarX">
    <slot></slot>
  </ScrollAreaScrollbarX>
  <ScrollAreaScrollbarY v-bind="$attrs" v-else>
    <slot></slot>
  </ScrollAreaScrollbarY>
</template>
