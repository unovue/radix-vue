<script setup lang="ts">
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import { computed, inject, provide, readonly } from "vue";
import { useArrowNavigation } from "@/shared";
import {
  RADIO_GROUP_INJECTION_KEY,
  RADIO_ITEM_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./RadioGroupRoot.vue";
import { type PrimitiveProps } from "@/Primitive";

interface RadioGroupItemProps extends PrimitiveProps {
  value?: string;
  disabled?: boolean;
  required?: boolean;
}

const injectedValue = inject<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY);

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
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

const { primitiveElement, currentElement } = usePrimitiveElement();

function handleKeydown(e: KeyboardEvent) {
  if (disabled.value) return;

  const newSelectedElement = useArrowNavigation(
    e,
    currentElement.value!,
    injectedValue?.parentElement.value,
    {
      arrowKeyOptions: injectedValue?.orientation.value,
      loop: injectedValue?.loop.value,
    }
  );

  if (newSelectedElement) {
    changeOption(newSelectedElement?.getAttribute("value")!);
    injectedValue!.currentFocusedElement!.value = newSelectedElement;
    newSelectedElement.focus();
  }
}

const getTabIndex = computed(() => {
  if (!injectedValue?.currentFocusedElement?.value) {
    return checked.value ? "0" : "-1";
  } else
    return injectedValue?.currentFocusedElement?.value === currentElement.value
      ? "0"
      : "-1";
});
</script>

<template>
  <PrimitiveButton
    type="button"
    ref="primitiveElement"
    role="radio"
    data-radix-vue-collection-item
    v-bind="$attrs"
    :as-child="props.asChild"
    :disabled="disabled ? true : undefined"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :tabindex="getTabIndex"
    :value="props.value"
    :name="injectedValue?.name"
    @click="changeOption(props.value!)"
    @keydown="handleKeydown"
  >
    <slot />
  </PrimitiveButton>
  <input
    type="radio"
    aria-hidden="true"
    tabindex="-1"
    :value="props.value"
    :required="required"
    :disabled="disabled"
    style="
      transform: translateX(-100%);
      position: absolute;
      pointer-events: none;
      opacity: 0;
      margin: 0px;
      width: 25px;
      height: 25px;
    "
    :checked="checked"
  />
</template>
