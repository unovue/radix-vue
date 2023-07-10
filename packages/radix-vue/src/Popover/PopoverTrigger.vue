<script lang="ts">
export interface PopoverTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import { PopperAnchor } from "@/Popper";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.open.value) {
    injectedValue?.hidePopover();
  } else {
    injectedValue?.showPopover();
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton
      type="button"
      ref="primitiveElement"
      :aria-expanded="injectedValue?.open.value || false"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      @click="handleClick"
    >
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
