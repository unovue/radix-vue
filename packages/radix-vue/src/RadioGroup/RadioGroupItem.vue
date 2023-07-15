<script setup lang="ts">
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import { computed, inject, provide, readonly } from "vue";
import { useArrowNavigation } from "../shared";
import {
  RADIO_GROUP_INJECTION_KEY,
  RADIO_ITEM_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./RadioGroupRoot.vue";

interface RadioGroupItemProps {
  asChild?: boolean;
  value?: string;
  disabled?: boolean;
  required?: boolean;
}

const injectedValue = inject<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY);

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  asChild: false,
  disabled: false,
});

const disabled = computed(() => {
  return injectedValue?.disabled.value || props.disabled;
});

const required = computed(() => {
  return injectedValue?.required.value || props.required;
});

const checked = computed(() => {
  return injectedValue?.modelValue?.value === props.value;
});

provide(RADIO_ITEM_INJECTION_KEY, readonly({ disabled, checked }));

function changeOption(value: string) {
  if (disabled.value) return;
  injectedValue?.changeModelValue(value);
}

const { primitiveElement, currentElement: currentRadioElement } =
  usePrimitiveElement();

function handleKeydown(e: KeyboardEvent) {
  if (disabled.value) return;

  const newSelectedElement = useArrowNavigation(
    e,
    currentRadioElement.value!,
    injectedValue?.parentElement.value!,
    {
      arrowKeyOptions: injectedValue?.orientation.value,
      loop: injectedValue?.loop.value,
    }
  );

  if (newSelectedElement) {
    newSelectedElement.focus();
    changeOption(
      newSelectedElement?.getAttribute("data-radix-vue-radio-value")!
    );
    injectedValue!.currentFocusedElement!.value = newSelectedElement;
  }
}

const getTabIndex = computed(() => {
  if (!injectedValue?.currentFocusedElement?.value) {
    return checked.value ? "0" : "-1";
  } else
    return injectedValue?.currentFocusedElement?.value ===
      currentRadioElement.value
      ? "0"
      : "-1";
});
</script>

<template>
  <PrimitiveButton
    type="button"
    ref="primitiveElement"
    data-radix-vue-collection-item
    :asChild="props.asChild"
    :data-state="checked ? 'checked' : 'unchecked'"
    :required="required"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :tabindex="getTabIndex"
    :data-radix-vue-radio-value="props.value"
    :name="injectedValue?.name"
    @click="changeOption(props.value!)"
    @keydown="handleKeydown"
  >
    <slot />
  </PrimitiveButton>
</template>
