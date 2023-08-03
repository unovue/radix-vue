<script lang="ts">
export interface PopoverContentProps extends PopperContentProps {
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
import { Primitive, usePrimitiveElement } from "@/Primitive";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverContentProps>(), {
  side: "bottom",
  align: "center",
  avoidCollisions: true,
});

const { primitiveElement, currentElement: tooltipContentElement } =
  usePrimitiveElement();

watchEffect(() => {
  if (tooltipContentElement.value) {
    if (injectedValue?.open.value) {
      trapFocus(tooltipContentElement.value!);
      window.addEventListener("mousedown", closeDialogWhenClickOutside);
      window.addEventListener("keydown", closePopoverOnEscape);
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

function closePopoverOnEscape(e: KeyboardEvent) {
  if (e.key === "Escape") {
    injectedValue?.hidePopover();
  }
}

function clearEvent() {
  window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  window.removeEventListener("keydown", closePopoverOnEscape);
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
    <Primitive
      v-if="injectedValue?.open.value"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :as-child="props.asChild"
      :as="as"
    >
      <slot />
    </Primitive>
  </PopperContent>
</template>
