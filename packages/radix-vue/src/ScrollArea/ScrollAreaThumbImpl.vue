<script setup lang="ts">
import { PrimitiveDiv } from "../Primitive";
import { inject, watchEffect } from "vue";

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

// watchEffect(() => {
//   const viewport = injectedValueFromRoot?.viewport;
//       if (viewport) {
//         /**
//          * We only bind to native scroll event so we know when scroll starts and ends.
//          * When scroll starts we start a requestAnimationFrame loop that checks for
//          * changes to scroll position. That rAF loop triggers our thumb position change
//          * when relevant to avoid scroll-linked effects. We cancel the loop when scroll ends.
//          * https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects
//          */
//         const handleScroll = () => {
//           debounceScrollEnd();
//           if (!removeUnlinkedScrollListenerRef.current) {
//             const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
//             removeUnlinkedScrollListenerRef.current = listener;
//             onThumbPositionChange();
//           }
//         };
//         onThumbPositionChange();
//         viewport.addEventListener('scroll', handleScroll);
//         return () => viewport.removeEventListener('scroll', handleScroll);
//       }
// })
</script>

<template>
  <PrimitiveDiv
    :data-state="
      injectedValueFromScrollbarVisible?.hasThumb ? 'visible' : 'hidden'
    "
    style="
      width: 'var(--radix-scroll-area-thumb-width)',
      height: 'var(--radix-scroll-area-thumb-height)'
    "
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  />
</template>
