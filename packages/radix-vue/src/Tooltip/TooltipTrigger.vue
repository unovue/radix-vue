<script lang="ts">
export type TooltipTriggerDataState =
  | "closed"
  | "delayed-open"
  | "instant-open";

export interface TooltipTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { useHover } from "@/shared";
import { inject } from "vue";
import { TOOLTIP_INJECTION_KEY } from "./TooltipRoot.vue";

const props = defineProps<TooltipTriggerProps>();
const injectedValue = inject(TOOLTIP_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

useHover(triggerElement, {
  delayEnter: injectedValue?.delayMs,
  onHoverEnter: () => injectedValue?.showTooltip(true),
  delayLeave: 0,
  onHoverLeave: () => injectedValue?.hideTooltip(),
  disabled: injectedValue?.disableHoverableContent,
});
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton
      type="button"
      ref="primitiveElement"
      :aria-describedby="
        injectedValue?.open ? injectedValue.contentId : undefined
      "
      :as-child="props.asChild"
      :data-state="injectedValue?.dataState.value"
      :aria-expanded="injectedValue?.open.value || false"
      @focus="injectedValue?.showTooltip(false)"
      @blur="injectedValue?.hideTooltip"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
