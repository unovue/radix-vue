<script lang="ts">
interface TooltipArrowProps {
  size?: number;
}
</script>

<script setup lang="ts">
import type { Side } from "@floating-ui/dom";
import { inject, ref, onMounted, computed } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import {
  TOOLTIP_CONTENT_INJECTION_KEY,
  type TooltipContentProvideValue,
} from "./TooltipContent.vue";

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  size: 10,
});

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const injectedContentValue = inject<TooltipContentProvideValue>(
  TOOLTIP_CONTENT_INJECTION_KEY
);

const arrowElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.arrowElement.value = arrowElement.value;
});

const arrowX = computed<number>(() => {
  return injectedContentValue?.middlewareData.value?.arrow?.x ?? 0;
});
const arrowY = computed<number>(() => {
  return injectedContentValue?.middlewareData.value?.arrow?.y ?? 0;
});
const offset = computed<number>(() => {
  return -props.size / 2;
});

const position = computed<Side>(() => {
  const opposedSide: Record<Side, Side> = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  };
  return opposedSide[injectedContentValue?.floatPosition.value as Side];
});
</script>

<template>
  <div
    ref="arrowElement"
    :style="{
      left: arrowX ? `${arrowX}px` : '',
      top: arrowY ? `${arrowY}px` : '',
      [position]: `${offset}px`,
      width: `${props.size}px`,
    }"
    style="
      position: absolute;
      aspect-ratio: 1;
      transform: rotate(45deg);
      z-index: -1;
      pointer-events: none;
    "
  ></div>
</template>
