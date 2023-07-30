<script lang="ts">
import { onClickOutside } from "@vueuse/core";
import { isSSR } from "@/shared/utils";
import { Components } from "./constants";

export type Boundary = Element | null | Array<Element | null>;

export interface DropdownMenuContentProps extends PopperContentProps {
  loop?: boolean; //false
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
  //onPointerDownOutside?: void;
  //onInteractOutside?: void;
}
</script>

<script setup lang="ts">
import { watchEffect } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

import { DROPDOWN_MENU_INJECTION_KEY } from "./DropdownMenuRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { provideCollection } from "@/shared/provideInjectCollection";
import { injectSafely } from "./utils";

defineExpose({
  injectsCollection: true,
});

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  side: "bottom",
  align: "center",
  avoidCollisions: true,
});

const injectedValue = injectSafely(
  DROPDOWN_MENU_INJECTION_KEY,
  Components.ROOT
);

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

const collectionItems = provideCollection(tooltipContentElement);

watchEffect(() => {
  if (isSSR) return;

  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      document.querySelector("body")!.style.pointerEvents = "none";
      injectedValue.itemsArray = collectionItems.value;
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
  <PopperContent v-bind="props" v-if="injectedValue?.modelValue?.value">
    <PrimitiveDiv
      ref="primitiveElement"
      :data-state="injectedValue?.modelValue?.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :as-child="props.asChild"
      style="pointer-events: auto"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
