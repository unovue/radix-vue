<script lang="ts">
export interface ToolbarLink extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  PrimitiveA,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  TOOLBAR_INJECTION_KEY,
  type ToolbarProvideValue,
} from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

const props = defineProps<ToolbarLink>();
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
  <PrimitiveA
    ref="primitiveElement"
    :tabindex="
      injectedValue?.activeElement.value === currentElement ? '0' : '-1'
    "
    :as-child="props.asChild"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </PrimitiveA>
</template>
