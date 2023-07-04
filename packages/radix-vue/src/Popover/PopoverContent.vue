<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const POPOVER_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<PopoverContentProvideValue>;

export type Boundary = Element | null | Array<Element | null>;

export interface PopoverContentProps {
  asChild?: boolean;
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
  //onPointerDownOutside?: void;
  //onInteractOutside?: void;
  forceMount?: boolean;
  side?: "top" | "right" | "bottom" | "left"; //"top"
  sideOffset?: number; //0
  align?: "start" | "center" | "end";
  alignOffset?: number; //"center"
  avoidCollisions?: boolean; //true
  collisionBoundary?: Boundary; //[]
  collisionPadding?: number | Partial<Record<Side, number>>; //0
  arrowPadding?: number; //0
  sticky?: "partial" | "always"; //"partial"
  hideWhenDetached?: boolean; //false
  class: string;
}

export type PopoverContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, watchEffect, provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/vue";
import { trapFocus } from "../shared/trap-focus";
import { useClickOutside } from "../shared/useClickOutside";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverContentProps>(), {
  side: "bottom",
  align: "center",
});

const tooltipContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = tooltipContentElement.value;
});

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue!.triggerElement, tooltipContentElement, {
  placement: props.side,
  middleware: [
    offset(10),
    flip(),
    shift(),
    arrow({ element: injectedValue?.arrowElement }),
  ],
  whileElementsMounted: autoUpdate,
});

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.open.value) {
      setTimeout(() => {
        trapFocus(tooltipContentElement.value!);
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("mouseup", clearEvents);
    } else {
      if (injectedValue?.triggerElement.value) {
        injectedValue?.triggerElement.value.focus();
      }
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, tooltipContentElement.value!);
  if (clickOutside) {
    injectedValue?.hidePopover();
  }
}

function clearEvents() {
  window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  window.removeEventListener("mouseup", clearEvents);
}

provide<PopoverContentProvideValue>(POPOVER_CONTENT_INJECTION_KEY, {
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
    <PrimitiveDiv
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :class="props.class"
      :asChild="props.asChild"
    >
      <slot />
    </PrimitiveDiv>
  </div>
</template>
