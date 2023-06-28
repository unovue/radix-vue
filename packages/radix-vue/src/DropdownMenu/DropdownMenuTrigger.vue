<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { PrimitiveButton } from "@/Primitive";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const triggerElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue?.showTooltip();
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowDown") {
    injectedValue?.showTooltip();
  }
}
</script>

<template>
  <PrimitiveButton
    type="button"
    ref="triggerElement"
    :aria-expanded="injectedValue?.modelValue.value || false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </PrimitiveButton>
</template>
