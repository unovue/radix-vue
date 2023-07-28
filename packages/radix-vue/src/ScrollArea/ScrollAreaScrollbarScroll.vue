<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { SCROLL_AREA_INJECTION_KEY } from "./ScrollAreaRoot.vue";
import { SCROLL_AREA_SCROLLBAR_INJECTION_KEY } from "./ScrollAreaScrollbar.vue";
import ScrollAreaScrollbarVisible from "./ScrollAreaScrollbarVisible.vue";
import { useStateMachine } from "../shared/useStateMachine";
import { useDebounceFn } from "@vueuse/core";

const rootContext = inject(SCROLL_AREA_INJECTION_KEY);
const scrollbarContext = inject(SCROLL_AREA_SCROLLBAR_INJECTION_KEY);

const { state, dispatch } = useStateMachine("hidden", {
  hidden: {
    SCROLL: "scrolling",
  },
  scrolling: {
    SCROLL_END: "idle",
    POINTER_ENTER: "interacting",
  },
  interacting: {
    SCROLL: "interacting",
    POINTER_LEAVE: "idle",
  },
  idle: {
    HIDE: "hidden",
    SCROLL: "scrolling",
    POINTER_ENTER: "interacting",
  },
});

watchEffect(() => {
  if (state.value === "idle") {
    window.setTimeout(
      () => dispatch("HIDE"),
      rootContext?.scrollHideDelay.value
    );
  }
});

const debounceScrollEnd = useDebounceFn(() => dispatch("SCROLL_END"), 100);

watchEffect(() => {
  const viewport = rootContext?.viewport.value;
  const scrollDirection = scrollbarContext?.isHorizontal.value
    ? "scrollLeft"
    : "scrollTop";

  if (viewport) {
    let prevScrollPos = viewport[scrollDirection];
    const handleScroll = () => {
      const scrollPos = viewport[scrollDirection];
      const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
      if (hasScrollInDirectionChanged) {
        dispatch("SCROLL");
        debounceScrollEnd();
      }
      prevScrollPos = scrollPos;
    };
    viewport.addEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <ScrollAreaScrollbarVisible v-bind="$attrs" v-if="state !== 'hidden'">
    <slot></slot>
  </ScrollAreaScrollbarVisible>
</template>
