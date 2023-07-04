<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const HOVER_CARD_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<HoverCardContentProvideValue>;

export type Boundary = Element | null | Array<Element | null>;

export interface HoverCardContentProps extends PopperContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}

export type HoverCardContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref } from "vue";
import {
  HOVER_CARD_INJECTION_KEY,
  type HoverCardProvideValue,
} from "./HoverCardRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { useMouseleaveDelay } from "../shared";

const injectedValue = inject<HoverCardProvideValue>(HOVER_CARD_INJECTION_KEY);

withDefaults(defineProps<HoverCardContentProps>(), {
  side: "bottom",
  align: "center",
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
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
