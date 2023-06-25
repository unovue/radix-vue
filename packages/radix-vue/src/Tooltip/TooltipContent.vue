<script setup lang="ts">
import { computed, inject, ref } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const triggerPosition = computed<DOMRect>(() => {
  const triggerRect =
    injectedValue?.triggerElement.value?.getBoundingClientRect();
  return triggerRect;
});

const floatPosition = computed<DOMRect>(() => {
  const floatRect = tooltipContentElement.value?.getBoundingClientRect();
  return floatRect;
});

let offset = 10;
const tooltipContentElement = ref<HTMLElement>();
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    role="tooltip"
    tabindex="-1"
    style="
      pointer-events: none;
      position: fixed;
      top: 0px;
      left: 0px;
      min-width: max-content;
    "
    :style="`transform: translate(${
      triggerPosition?.left +
      triggerPosition?.width / 2 -
      floatPosition?.width / 2
    }px ,${triggerPosition?.top - floatPosition?.height - offset}px)`"
  >
    <slot />
  </div>
</template>
