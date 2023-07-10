<script lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCollection } from "@/shared";

export type Boundary = Element | null | Array<Element | null>;

export interface DropdownMenuContentProps extends PopperContentProps {
  asChild?: boolean;
  loop?: boolean; //false
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
  //onPointerDownOutside?: void;
  //onInteractOutside?: void;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  side: "bottom",
  align: "center",
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

const { createCollection, getItems } = useCollection();
createCollection(tooltipContentElement);

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      document.querySelector("body")!.style.pointerEvents = "none";
      injectedValue.itemsArray = getItems(tooltipContentElement.value);
    } else {
      if (injectedValue?.triggerElement.value) {
        handleCloseMenu();
      }
    }
  }
});

function handleCloseMenu() {
  document.querySelector("body")!.style.pointerEvents = "";
  setTimeout(() => {
    injectedValue?.triggerElement.value?.focus();
  }, 0);
}

onClickOutside(tooltipContentElement, (event) => {
  const target = event.target as HTMLElement;
  if (target.closest('[role="menuitem"]')) return;
  injectedValue?.hideTooltip();
});
</script>

<template>
  <PopperContent v-bind="props" v-if="injectedValue?.modelValue.value">
    <PrimitiveDiv
      ref="primitiveElement"
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :asChild="props.asChild"
      style="pointer-events: auto"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
