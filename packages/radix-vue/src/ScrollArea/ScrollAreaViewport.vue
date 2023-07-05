<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import {
  type ScrollAreaProvideValue,
  SCROLL_AREA_INJECTION_KEY,
} from "./ScrollAreaRoot.vue";

const injectedValueFromRoot = inject<ScrollAreaProvideValue>(
  SCROLL_AREA_INJECTION_KEY
);

const viewportElement = ref<HTMLElement>();
const contentElement = ref<HTMLElement>();

onMounted(() => {
  injectedValueFromRoot?.onViewportChange(viewportElement.value!);
  injectedValueFromRoot?.onContentChange(contentElement.value!);
});
</script>

<template>
  <div
    ref="viewportElement"
    data-radix-scroll-area-viewport=""
    :style="{
      /**
       * We don't support `visible` because the intention is to have at least one scrollbar
       * if this component is used and `visible` will behave like `auto` in that case
       * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
       *
       * We don't handle `auto` because the intention is for the native implementation
       * to be hidden if using this component. We just want to ensure the node is scrollable
       * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
       * the browser from having to work out whether to render native scrollbars or not,
       * we tell it to with the intention of hiding them in CSS.
       */
      overflowX: injectedValueFromRoot?.scrollbarXEnabled.value
        ? 'scroll'
        : 'hidden',
      overflowY: injectedValueFromRoot?.scrollbarYEnabled.value
        ? 'scroll'
        : 'hidden',
    }"
  >
    <div ref="contentElement" :style="{ minWidth: '100%', display: 'table' }">
      <slot></slot>
    </div>
  </div>
</template>

<style>
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}

[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
</style>
