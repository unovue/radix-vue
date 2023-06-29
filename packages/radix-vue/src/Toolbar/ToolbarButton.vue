<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import {
  TOOLBAR_INJECTION_KEY,
  type ToolbarProvideValue,
} from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

const injectedValue = inject<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY);

const { primitiveElement, currentElement } = usePrimitiveElement();

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    injectedValue?.parentElement.value!
  );
  newSelectedElement?.focus();
}
</script>

<template>
  <PrimitiveButton
    ref="primitiveElement"
    type="button"
    :tabindex="
      injectedValue?.activeElement.value === currentElement ? '0' : '-1'
    "
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </PrimitiveButton>
</template>
