<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export type Boundary = Element | null | Array<Element | null>;

export interface TooltipContentProps {
  asChild?: boolean;
  ariaLabel?: string;
  onEscapeKeyDown?: void;
  onPointerDownOutside?: void;
  forceMount?: boolean;
  side?: "top" | "right" | "bottom" | "left"; //"top"
  sideOffset?: number; //0
  align?: boolean;
  alignOffset?: "start" | "center" | "end"; //"center"
  avoidCollisions?: boolean; //true
  collisionBoundary?: Boundary; //[]
  collisionPadding?: number | Partial<Record<Side, number>>; //0
  arrowPadding?: number; //0
  sticky?: "partial" | "always"; //"partial"
  hideWhenDetached?: boolean; //false
}

export const TOOLTIP_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<TooltipContentProvideValue>;

export type TooltipContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, provide } from "vue";
import {
  TOOLTIP_INJECTION_KEY,
  type TooltipProvideValue,
} from "./TooltipRoot.vue";
import { useFloating, offset, flip, shift, arrow } from "@floating-ui/vue";

const injectedValue = inject<TooltipProvideValue>(TOOLTIP_INJECTION_KEY);

const props = defineProps({
  class: String,
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue?.triggerElement!, tooltipContentElement, {
  placement: "top",
  middleware: [
    offset(10),
    flip(),
    shift(),
    arrow({ element: injectedValue?.arrowElement }),
  ],
});

provide<TooltipContentProvideValue>(TOOLTIP_CONTENT_INJECTION_KEY, {
  middlewareData: middlewareData,
  floatPosition: floatPosition as Ref<Side>,
});
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.open.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <div
      :data-state="injectedValue?.open.value ? 'delayed-open' : 'closed'"
      data-side="top"
      data-align="center"
      role="tooltip"
      tabindex="-1"
      :class="props.class"
    >
      <slot />
    </div>
  </div>
</template>
