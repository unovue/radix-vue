<script lang="ts">
import type { TooltipProvideValue } from "../../Tooltip/TooltipRoot.vue";
import type { TooltipContentProvideValue } from "../../Tooltip/TooltipContent.vue";

interface TooltipArrowProps {
  size?: number;
  injectedValue?: TooltipProvideValue | undefined;
  injectedContentValue?: TooltipContentProvideValue | undefined;
}
</script>

<script setup lang="ts">
import type { Side } from "@floating-ui/dom";
import { ref, onMounted, computed } from "vue";

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  size: 10,
});

const arrowElement = ref<HTMLElement>();
onMounted(() => {
  props.injectedValue!.arrowElement.value = arrowElement.value;
});

const arrowX = computed<number>(() => {
  return props.injectedContentValue?.middlewareData.value?.arrow?.x ?? 0;
});
const arrowY = computed<number>(() => {
  return props.injectedContentValue?.middlewareData.value?.arrow?.y ?? 0;
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
  return opposedSide[props.injectedContentValue?.floatPosition.value as Side];
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
