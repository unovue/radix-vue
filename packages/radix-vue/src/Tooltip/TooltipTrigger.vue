<script lang="ts">
export type TooltipTriggerDataState =
  | "closed"
  | "delayed-open"
  | "instant-open";

export interface TooltipTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import { useHover } from "@/shared";
import { inject, ref } from "vue";
import { TOOLTIP_INJECTION_KEY } from "./TooltipRoot.vue";

const props = defineProps<TooltipTriggerProps>();
const injectedValue = inject(TOOLTIP_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();
useHover(triggerElement, {
  delayEnter: injectedValue?.delayMs,
  onHoverEnter: () => injectedValue?.showTooltip(true),
  delayLeave: injectedValue?.delayMs,
  onHoverLeave: () => injectedValue?.hideTooltip(),
  disabled: injectedValue?.disableHoverableContent,
});
</script>

<template>
  <PopperAnchor ref="triggerElement" asChild>
    <PrimitiveButton
      type="button"
      :aria-describedby="
        injectedValue?.open ? injectedValue.contentId : undefined
      "
      :as-child="props.asChild"
      :data-state="injectedValue?.dataState.value"
      :aria-expanded="injectedValue?.open.value || false"
      @focus="injectedValue?.showTooltip(false)"
      @blur="injectedValue?.hideTooltip"
      style="cursor: default"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
