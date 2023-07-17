<script lang="ts">
export type TooltipTriggerDataState =
  | "closed"
  | "delayed-open"
  | "instant-open";

export interface TooltipRootProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useHoverDelay } from "../shared";
import { PopperAnchor } from "@/Popper";

const props = defineProps<TooltipRootProps>();
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
      :as-child="props.asChild"
      @mouseenter="handleMouseEnter"
      @mouseleave="injectedValue?.hideTooltip"
      style="cursor: default"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
