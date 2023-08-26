<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export interface CheckboxRootProps extends PrimitiveProps {
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled checked state of the checkbox.
   */
  checked?: boolean;
  onCheckedChange?: void;
  modelValue?: boolean;

  /**
   * Disables the checkbox.
   */
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

export type CheckboxProvideValue = {
  disabled: boolean;
  required: boolean;
  modelValue: Readonly<Ref<boolean>>;
};

export const CHECKBOX_INJECTION_KEY =
  Symbol() as InjectionKey<CheckboxProvideValue>;
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { toRef, provide } from "vue";

const props = withDefaults(defineProps<CheckboxRootProps>(), {
  modelValue: false,
  value: "on",
  as: "button",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

provide<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY, {
  required: props.required,
  disabled: props.disabled,
  modelValue: toRef(() => props.modelValue),
});

function updateModelValue() {
  return emit("update:modelValue", !props.modelValue);
}

let dataState: "checked" | "unchecked" | "indeterminate";
</script>

<template>
  <Primitive
    :as-child="props.asChild"
    :as="as"
    :value="props.value"
    :disabled="props.disabled"
    :required="props.required"
    role="checkbox"
    :aria-checked="props.modelValue"
    :checked="props.modelValue"
    :name="props.name"
    style="position: relative"
    :data-state="dataState"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <slot />
  </Primitive>
</template>
