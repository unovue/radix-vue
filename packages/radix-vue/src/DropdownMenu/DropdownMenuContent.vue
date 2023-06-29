<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const DROPDOWN_MENU_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuContentProvideValue>;

export type Boundary = Element | null | Array<Element | null>;

export interface DropdownMenuContentProps {
  asChild?: boolean;
  loop?: boolean; //false
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

export type DropdownMenuContentProvideValue = {
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
import { useClickOutside } from "../shared/useClickOutside";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
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
  placement: "bottom",
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
    if (injectedValue?.modelValue.value) {
      setTimeout(() => {
        document.querySelector("body")!.style.pointerEvents = "none";
        focusFirstRadixElement();
        fillItemsArray();
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
    } else {
      if (injectedValue?.triggerElement.value) {
        handleCloseMenu();
      }
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, tooltipContentElement.value!);
  if (clickOutside) {
    injectedValue?.hideTooltip();
    window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  }
}

function focusFirstRadixElement() {
  const allToggleItem = Array.from(
    tooltipContentElement.value!.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    injectedValue!.selectedElement.value = allToggleItem[0];
    allToggleItem[0].focus();
  }
}

function fillItemsArray() {
  const allToggleItem = Array.from(
    tooltipContentElement.value!.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue!.itemsArray = allToggleItem;
}

function handleCloseMenu() {
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    injectedValue?.triggerElement.value?.focus();
  }, 0);
}

provide<DropdownMenuContentProvideValue>(DROPDOWN_MENU_CONTENT_INJECTION_KEY, {
  middlewareData: middlewareData,
  floatPosition: floatPosition as Ref<Side>,
});
</script>

<template>
  <div
    ref="tooltipContentElement"
    v-if="injectedValue?.modelValue.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <PrimitiveDiv
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :class="props.class"
      :asChild="props.asChild"
      style="pointer-events: auto"
    >
      <slot />
    </PrimitiveDiv>
  </div>
</template>
