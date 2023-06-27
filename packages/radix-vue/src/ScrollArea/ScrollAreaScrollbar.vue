<script lang="ts">
import { type Ref } from "vue";
export interface ScrollAreaScrollbarProps {
  orientation: "vertical" | "horizontal";
  forceMount?: boolean;
}

export interface ScrollAreaScollbarProvideValue {
  orientation: Ref<"vertical" | "horizontal">;
  forceMount?: Ref<boolean>;
}

export const SCROLL_AREA_SCROLLBAR_INJECTION_KEY =
  "ScrollAreaScrollbar" as const;

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, inject, onUnmounted, watch, provide, toRef } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

const injectedValue = inject<ScrollAreaProvideValue>(SCROLL_AREA_INJECTION_KEY);

const props = withDefaults(defineProps<ScrollAreaScrollbarProps>(), {
  orientation: "vertical",
  forceMount: undefined,
});

const isHorizontal = computed(() => props.orientation === "horizontal");

watch(isHorizontal, () => {
  if (isHorizontal.value) {
    injectedValue?.onScrollbarXEnabledChange(true);
  } else {
    injectedValue?.onScrollbarYEnabledChange(true);
  }
});

onUnmounted(() => {
  injectedValue?.onScrollbarXEnabledChange(false);
  injectedValue?.onScrollbarYEnabledChange(false);
});

provide<ScrollAreaScollbarProvideValue>(SCROLL_AREA_SCROLLBAR_INJECTION_KEY, {
  orientation: toRef(() => props.orientation),
  forceMount: toRef(() => props.forceMount),
});
</script>

<template>
  <ScrollAreaScrollbarHover v-bind="$attrs" v-if="injectedValue?.type === 'hover'" :forceMount="forceMount" />
  <!-- <ScrollAreaScrollbarScroll v-bind="$attrs" v-else-if="injectedValue?.type === 'scroll'" :forceMount="forceMount" />
  <ScrollAreaScrollbarAuto v-bind="$attrs" v-else-if="injectedValue?.type === 'auto'" :forceMount="forceMount" />
  <ScrollAreaScrollbarVisible v-bind="$attrs" v-else-if="injectedValue?.type === 'always'" :forceMount="forceMount" /> -->
</template>
