<script setup lang="ts">
import type { Side } from "@floating-ui/dom";
import { inject, onMounted, computed } from "vue";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import {
  CONTEXT_MENU_CONTENT_INJECTION_KEY,
  type ContextMenuContentProvideValue,
} from "./ContextMenuContent.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const injectedContentValue = inject<ContextMenuContentProvideValue>(
  CONTEXT_MENU_CONTENT_INJECTION_KEY
);

const { primitiveElement, currentElement: arrowElement } =
  usePrimitiveElement();
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
  const offsetY = injectedContentValue?.middlewareData.value?.offset?.y ?? 0;
  return -Math.abs(offsetY) / 2;
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
  <PrimitiveDiv
    ref="primitiveElement"
    :style="{
      left: arrowX ? `${arrowX}px` : '',
      top: arrowY ? `${arrowY}px` : '',
      [position]: `${offset}px`,
    }"
    style="
      position: absolute;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      z-index: -1;
      pointer-events: none;
    "
  ></PrimitiveDiv>
</template>
