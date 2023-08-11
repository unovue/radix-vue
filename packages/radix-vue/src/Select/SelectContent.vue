<script lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCollection } from "@/shared";

export type Boundary = Element | null | Array<Element | null>;

export interface SelectContentProps extends PopperContentProps {
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
import { Primitive, usePrimitiveElement } from "@/Primitive";
import { SELECT_INJECTION_KEY } from "./SelectRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";

const props = withDefaults(defineProps<SelectContentProps>(), {
  side: "bottom",
  align: "center",
  avoidCollisions: true,
});

const injectedValue = inject(SELECT_INJECTION_KEY);

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

const { createCollection, getItems } = useCollection();
createCollection(tooltipContentElement);

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.isOpen.value) {
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
  <PopperContent
    v-bind="props"
    v-if="injectedValue?.isOpen.value"
    prioritize-position
    role="listbox"
    :data-state="injectedValue?.isOpen.value ? 'open' : 'closed'"
    :data-side="props.side"
    :data-align="props.align"
  >
    <Primitive
      ref="primitiveElement"
      :as-child="props.asChild"
      :as="as"
      role="presentation"
      style="pointer-events: auto"
    >
      <slot />
    </Primitive>
  </PopperContent>
</template>
