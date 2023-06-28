<script lang="ts">
export interface ToolbarButton {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { ref, inject } from "vue";
import {
  TOOLBAR_INJECTION_KEY,
  type ToolbarProvideValue,
} from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

const injectedValue = inject<ToolbarProvideValue>(TOOLBAR_INJECTION_KEY);

const currentElement = ref<HTMLElement | undefined>();

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
  <button
    :data-orientation="injectedValue?.orientation"
    ref="currentElement"
    type="button"
    :tabindex="
      injectedValue?.activeElement.value === currentElement ? '0' : '-1'
    "
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </button>
</template>
