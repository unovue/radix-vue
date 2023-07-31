<script lang="ts">
export interface PopoverContentProps extends PopperContentProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onUnmounted, watchEffect } from "vue";
import { trapFocus } from "../shared/trap-focus";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { onClickOutside } from "@vueuse/core";

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
      window.addEventListener("keydown", closePopoverOnEscape);
    } else {
      if (injectedValue?.triggerElement.value) {
        injectedValue?.triggerElement.value.focus();
        clearEvent();
      }
    }
  }
});

onClickOutside(tooltipContentElement, (event) => {
  injectedValue?.hidePopover();
  event.preventDefault();
  event.stopPropagation();
});

function closePopoverOnEscape(e: KeyboardEvent) {
  if (e.key === "Escape") {
    injectedValue?.hidePopover();
  }
}

function clearEvent() {
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
    <PrimitiveDiv
      v-if="injectedValue?.open.value"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      role="tooltip"
      :as-child="props.asChild"
    >
      <slot />
    </PrimitiveDiv>
  </PopperContent>
</template>
