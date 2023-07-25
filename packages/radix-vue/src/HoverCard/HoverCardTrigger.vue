<script lang="ts">
export interface HoverCardTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import { PopperAnchor } from "@/Popper";

import { useHoverDelay, useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = defineProps<HoverCardTriggerProps>();

const { primitiveElement, currentElement } = usePrimitiveElement();

async function handleMouseEnter(e: MouseEvent) {
  const result = await useHoverDelay(
    e,
    currentElement.value!,
    injectedValue?.openDelay
  );
  if (result) {
    injectedValue?.showTooltip();
  }
}

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false;
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay);
  if (result && !injectedValue?.isHover) {
    injectedValue?.hideTooltip();
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton
      ref="primitiveElement"
      :as-child="props.asChild"
      :aria-expanded="injectedValue?.open.value || false"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      @mouseover="injectedValue!.isHover = true"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseleave"
      style="cursor: default"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
