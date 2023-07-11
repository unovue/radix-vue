<script lang="ts">
export interface ContextMenuContentProps extends PopperContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, watchEffect } from "vue";
import { useClickOutside } from "../shared/useClickOutside";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);

const props = withDefaults(defineProps<ContextMenuContentProps>(), {
  side: "right",
  align: "start",
  alignOffset: 3,
  avoidCollisions: true,
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.modelValue.value) {
      setTimeout(() => {
        focusFirstRadixElement();
        fillItemsArray();
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("scroll", closeDialogWhenScrolled);
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  if (tooltipContentElement.value) {
    const clickOutside = useClickOutside(e, tooltipContentElement.value);
    if (clickOutside) {
      injectedValue?.hideTooltip();
      window.removeEventListener("mousedown", closeDialogWhenClickOutside);
    }
  }
}

function closeDialogWhenScrolled() {
  injectedValue?.hideTooltip();
  window.removeEventListener("scroll", closeDialogWhenScrolled);
}

function focusFirstRadixElement() {
  if (!tooltipContentElement.value) {
    return console.log("tooltipContentElement not found!");
  }
  const allToggleItem = Array.from(
    tooltipContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    injectedValue!.selectedElement.value = allToggleItem[0];
    allToggleItem[0].focus();
  }
}

function fillItemsArray() {
  if (!tooltipContentElement.value) {
    return console.log("tooltipContentElement not found!");
  }
  const allToggleItem = Array.from(
    tooltipContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue!.itemsArray = allToggleItem;
}
</script>

<template>
  <PopperContent
    ref="primitiveElement"
    v-if="injectedValue?.modelValue.value"
    v-bind="props"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    :asChild="props.asChild"
    data-side="bottom"
    role="tooltip"
    style="pointer-events: auto"
  >
    <slot />
  </PopperContent>
</template>
