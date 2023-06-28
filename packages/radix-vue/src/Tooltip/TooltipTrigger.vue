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
import { inject, ref, onMounted, computed } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useHoverDelay } from "../shared";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

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
  <button
    type="button"
    ref="triggerElement"
    :data-state="dataState"
    :aria-expanded="injectedValue?.open.value || false"
    @mouseenter="handleMouseEnter"
    @mouseleave="injectedValue?.hideTooltip"
    style="cursor: default"
  >
    <slot />
  </button>
</template>
