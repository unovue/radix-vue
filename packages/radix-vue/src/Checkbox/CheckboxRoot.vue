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
    role="checkbox"
    :aria-checked="props.modelValue"
    :data-state="dataState"
    style="position: relative"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-bind="props.modelValue"
      @change="updateModelValue"
      :checked="props.modelValue"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="dataState"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </Primitive>
</template>
