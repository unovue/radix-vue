<script lang="ts">
interface ToggleGroupItemProps {
  value?: string;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import {
  TOGGLE_GROUP_INJECTION_KEY,
  type ToggleGroupProvideValue,
} from "./ToggleGroupRoot.vue";
import { useArrowNavigation } from "../shared";

const injectedValue = inject<ToggleGroupProvideValue>(
  TOGGLE_GROUP_INJECTION_KEY
);

const props = defineProps<ToggleGroupItemProps>();

const { primitiveElement, currentElement: currentToggleElement } =
  usePrimitiveElement();

const state = computed(() => {
  if (injectedValue?.type === "multiple") {
    return injectedValue?.modelValue?.value?.includes(props.value!)
      ? "on"
      : "off";
  } else {
    return injectedValue?.modelValue?.value === props.value ? "on" : "off";
  }
});

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentToggleElement.value!,
    injectedValue?.parentElement.value!
  );
  newSelectedElement?.focus();
}
</script>

<template>
  <PrimitiveButton
    type="button"
    :data-state="state"
    @click="injectedValue?.changeModelValue(props.value!)"
    ref="primitiveElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
  >
    <slot />
  </PrimitiveButton>
</template>
