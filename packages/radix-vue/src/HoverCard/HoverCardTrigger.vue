<script lang="ts">
export interface HoverCardTriggerProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { inject } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";

import { useHoverDelay, useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = defineProps<HoverCardTriggerProps>();

const { primitiveElement, currentElement } = usePrimitiveElement();

useHoverDelay(currentElement, {
  onEnter: {
    fn: () => injectedValue?.showTooltip(),
    delayMs: injectedValue?.openDelay,
  },
  onLeave: {
    fn: () => injectedValue?.hideTooltip(),
    delayMs: injectedValue?.closeDelay,
  },
});
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton ref="primitiveElement" :as-child="props.asChild" :aria-expanded="injectedValue?.open.value || false"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'" @mouseover="injectedValue!.isHover = true"
      style="cursor: default">
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
