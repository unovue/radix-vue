<script lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCollection } from "@/shared";

export type Boundary = Element | null | Array<Element | null>;

export interface ContextMenuContentProps extends PopperContentProps {
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
import { inject, watchEffect, nextTick } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

import { CONTEXT_MENU_INJECTION_KEY } from "./ContextMenuRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";

const props = withDefaults(defineProps<ContextMenuContentProps>(), {
  side: "bottom",
  align: "start",
  avoidCollisions: true,
});

const injectedValue = inject(CONTEXT_MENU_INJECTION_KEY);

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

const { createCollection, getItems } = useCollection();
createCollection(tooltipContentElement);

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      injectedValue.itemsArray = getItems(tooltipContentElement.value);
      window.addEventListener("keydown", handleKeydown);
      window.addEventListener("scroll", closeDialogWhenScrolled);
    } else {
      cleanupEvents();
    }
  }
});

watchEffect(() => {
  if (injectedValue?.selectedElement.value) {
    cleanupEvents();
  }
});

function cleanupEvents() {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("scroll", closeDialogWhenScrolled);
}

onClickOutside(tooltipContentElement, (event) => {
  const target = event.target as HTMLElement;
  if (target.closest('[role="menuitem"]')) return;
  injectedValue?.hideTooltip();
});

function closeDialogWhenScrolled() {
  injectedValue?.hideTooltip();
  window.removeEventListener("scroll", closeDialogWhenScrolled);
}

async function handleKeydown(e: KeyboardEvent) {
  e.preventDefault();
  if (e.key === "ArrowDown" || e.key === "Enter" || e.keyCode === 32) {
    injectedValue?.changeSelected(injectedValue.itemsArray?.[0]);
    injectedValue?.selectedElement.value?.focus();
  } else if (e.key === "ArrowUp") {
    const newSelectedElement =
      injectedValue?.itemsArray?.[injectedValue?.itemsArray.length - 1];
    injectedValue?.changeSelected(newSelectedElement!);
    newSelectedElement?.focus();
  }
  window.removeEventListener("keydown", handleKeydown);
}
</script>

<template>
  <PopperContent
    v-bind="props"
    v-if="injectedValue?.modelValue.value"
    prioritize-position
  >
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
