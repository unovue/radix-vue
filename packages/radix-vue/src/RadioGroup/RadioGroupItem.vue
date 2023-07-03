<script setup lang="ts">
import { inject, computed, provide } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./RadioGroupRoot.vue";
import { useArrowNavigation } from "../shared";

interface RadioGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  required?: boolean;
}

const injectedValue = inject<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY);

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  asChild: false,
});

provide("radioItemValue", props.value);

const state = computed(() => {
  return injectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function changeTab(value: string) {
  injectedValue?.changeModelValue(value);
}

const { primitiveElement, currentElement: currentRadioElement } =
  usePrimitiveElement();

function handleKeydown(e: KeyboardEvent) {
  const newSelectedElement = useArrowNavigation(
    e,
    currentRadioElement.value!,
    injectedValue?.parentElement.value!
  );

  if (newSelectedElement) {
    newSelectedElement.focus();
    changeTab(newSelectedElement?.getAttribute("data-radix-vue-radio-value")!);
  }
}
</script>

<template>
  <PrimitiveButton
    type="button"
    :data-state="state"
    :data-disabled="props.disabled"
    @click="injectedValue?.changeModelValue(props.value)"
    :tabindex="`${
      injectedValue?.modelValue?.value === props.value ? '0' : '-1'
    }`"
    ref="primitiveElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    :data-radix-vue-radio-value="props.value"
  >
    <slot />
  </PrimitiveButton>
</template>
