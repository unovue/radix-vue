<script lang="ts">
export type TooltipTriggerDataState =
  | "closed"
  | "delayed-open"
  | "instant-open";

export interface TooltipRootProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useHoverDelay } from "../shared";
import { PopperAnchor } from "@/Popper";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

async function handleMouseEnter(e: MouseEvent) {
  const result = await useHoverDelay(e, triggerElement.value!);
  if (result) {
    injectedValue?.showTooltip();
  }
}

const dataState = computed<TooltipTriggerDataState>(() => {
  return injectedValue?.open.value ? "closed" : "instant-open";
});
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton
      type="button"
      ref="primitiveElement"
      :data-state="dataState"
      :aria-expanded="injectedValue?.open.value || false"
      @mouseenter="handleMouseEnter"
      @mouseleave="injectedValue?.hideTooltip"
      style="cursor: default"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
