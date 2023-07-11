<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton } from "@/Primitive";
import {
  CONTEXT_MENU_INJECTION_KEY,
  type ContextMenuProvideValue,
} from "./ContextMenuRoot.vue";
import { PopperAnchor } from "@/Popper";

const injectedValue = inject<ContextMenuProvideValue>(
  CONTEXT_MENU_INJECTION_KEY
);
const virtualEl = {
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x: injectedValue?.clientX.value,
      y: injectedValue?.clientY.value,
      top: injectedValue?.clientY.value,
      left: injectedValue?.clientX.value,
      right: injectedValue?.clientX.value,
      bottom: injectedValue?.clientY.value,
    };
  },
} as HTMLElement;

function handleContextMenu(e: MouseEvent) {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue!.clientX.value = e.clientX;
    injectedValue!.clientY.value = e.clientY;
    injectedValue?.showTooltip();
  }
}
</script>

<template>
  <PopperAnchor :element="virtualEl" asChild>
    <PrimitiveButton
      type="button"
      :aria-expanded="injectedValue?.modelValue.value || false"
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      @contextmenu.prevent="handleContextMenu"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
