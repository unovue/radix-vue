<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export type AccordionType = "single" | "multiple";

export interface SingleAccordionRootProps {
  type?: "single";
  modelValue?: string | null;
  // value?: string | null;
}

export interface MultipleAccordionRootProps {
  type: "multiple";
  modelValue?: string[] | null;
  // value?: string[];
}

export type AccordionRootProps = {
  disabled?: boolean;
} & (SingleAccordionRootProps | MultipleAccordionRootProps);

export interface AccordionProvideValue {
  readonly type: Readonly<Ref<AccordionType>>;
  readonly disabled: Readonly<Ref<boolean>>;
  modelValue: Readonly<Ref<string | string[] | null | undefined>>;
  changeModelValue: (value: string | string[] | null) => void;
  // value: Readonly<Ref<AccordionRootProps["value"]>>;
}

export const ACCORDION_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionProvideValue>;
</script>

<script setup lang="ts">
import { provide, toRef } from "vue";

const props = withDefaults(defineProps<AccordionRootProps>(), {
  type: "single",
  // value: null,
  disabled: false,
});

const emit = defineEmits(["update:modelValue"]);

provide<AccordionProvideValue>(ACCORDION_INJECTION_KEY, {
  type: toRef(() => props.type),
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emit("update:modelValue", value);
  },
  // value: toRef(() => props.value),
  disabled: toRef(() => props.disabled),
});
</script>

<template>
  <div data-radix-accordion-root>
    <slot />
  </div>
</template>
