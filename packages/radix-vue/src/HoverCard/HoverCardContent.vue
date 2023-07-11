<script lang="ts">
export type Boundary = Element | null | Array<Element | null>;

export interface HoverCardContentProps extends PopperContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  side: "bottom",
  align: "center",
  avoidCollisions: true,
});

async function handleMouseleave(e: MouseEvent) {
  injectedValue!.isHover = false;
  const result = await useMouseleaveDelay(e, injectedValue?.closeDelay!);
  if (result && !injectedValue?.isHover) {
    injectedValue?.hideTooltip();
  }
}
</script>

<template>
  <PopperContent
    v-bind="props"
    v-if="injectedValue?.open.value"
    @mouseover="injectedValue.isHover = true"
    @mouseleave="handleMouseleave"
    :data-state="injectedValue?.open.value ? 'delayed-open' : 'closed'"
    role="tooltip"
    tabindex="-1"
    :as-child="asChild"
  >
    <slot />
  </PopperContent>
</template>
