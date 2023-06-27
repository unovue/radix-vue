<script lang="ts">
interface PopoverArrowProps {
  size?: number;
}
</script>

<script setup lang="ts">
import type { Side } from "@floating-ui/dom";
import { inject, ref, onMounted, computed } from "vue";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";
import {
  POPOVER_CONTENT_INJECTION_KEY,
  type PopoverContentProvideValue,
} from "./PopoverContent.vue";

const props = withDefaults(defineProps<PopoverArrowProps>(), {
  size: 10,
});

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const injectedContentValue = inject<PopoverContentProvideValue>(
  POPOVER_CONTENT_INJECTION_KEY
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
