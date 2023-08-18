<script lang="ts">
export interface ToolbarButtonProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { TOOLBAR_INJECTION_KEY } from "./ToolbarRoot.vue";
import { useArrowNavigation } from "../shared";

const props = withDefaults(defineProps<ToolbarButtonProps>(), { as: "button" });
const injectedValue = inject(TOOLBAR_INJECTION_KEY);

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
  <Primitive
    ref="primitiveElement"
    :data-orientation="injectedValue?.orientation"
    :as-child="props.asChild"
    :as="as"
    :type="as === 'button' ? 'button' : undefined"
    :tabindex="
      injectedValue?.activeElement.value === currentElement ? '0' : '-1'
    "
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </Primitive>
</template>
