<script lang="ts">
export interface PopoverContentProps extends PopperContentProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onUnmounted, watchEffect } from "vue";

import { trapFocus } from "../shared/trap-focus";
import { useClickOutside } from "../shared/useClickOutside";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverContentProps>(), {
  side: "bottom",
  align: "center",
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

watchEffect(() => {
  if (tooltipContentElement.value) {
    injectedValue!.floatingElement.value = tooltipContentElement.value;
    if (injectedValue?.open.value) {
      trapFocus(tooltipContentElement.value!);
      window.addEventListener("mousedown", closeDialogWhenClickOutside);
    } else {
      if (injectedValue?.triggerElement.value) {
        injectedValue?.triggerElement.value.focus();
        clearEvent();
      }
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  if (injectedValue?.triggerElement.value?.contains(e.target as Node)) {
    return;
  }

  const clickOutside = useClickOutside(e, tooltipContentElement.value!);
  if (clickOutside) {
    injectedValue?.hidePopover();
    e.preventDefault();
    e.stopPropagation();
  }
}

function clearEvent() {
  window.removeEventListener("mousedown", closeDialogWhenClickOutside);
}

onUnmounted(() => {
  clearEvent();
});
</script>

<template>
  <PopperContent
    ref="primitiveElement"
    v-bind="props"
    v-if="injectedValue?.open.value"
  >
    <PrimitiveDiv
      v-if="injectedValue?.open.value"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :asChild="props.asChild"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
