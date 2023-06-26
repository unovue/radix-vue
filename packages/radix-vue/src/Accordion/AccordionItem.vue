<script lang="ts" context="module">
import type { CollapsibleRootProps } from "../Collapsible";
import type { InjectionKey, Ref } from "vue";

export interface AccordionItemProps extends CollapsibleRootProps {
  value: string;
  //   modelValue: string;
}

export interface AccordionItemProvideValue {
  readonly value: Readonly<Ref<string>>;
  //   readonly modelValue: Readonly<Ref<string>>;
  //   changeModelValue: (value: string) => void;
}

export const ACCORDION_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<AccordionItemProvideValue>;
</script>

<script setup lang="ts">
import { computed, inject, provide, toRef } from "vue";
import { CollapsibleRoot } from "../Collapsible";
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";

const injectedValue = inject<AccordionProvideValue>(ACCORDION_INJECTION_KEY);

const props = defineProps<AccordionItemProps>();

// const emit = defineEmits(["update:modelValue"]);

const isOpen = computed(() =>
  Array.isArray(injectedValue?.modelValue.value)
    ? injectedValue?.modelValue.value.includes(props.value)
    : injectedValue?.modelValue.value === props.value
);

provide<AccordionItemProvideValue>(ACCORDION_ITEM_INJECTION_KEY, {
  value: toRef(() => props.value),
  //   modelValue: toRef(() => props.modelValue),
  //   changeModelValue: (value: any) => {
  //     emit("update:modelValue", value);
  //   },
});
</script>

<template>
  <CollapsibleRoot :open="isOpen" :disabled="injectedValue?.disabled.value">
    <slot />
  </CollapsibleRoot>
</template>
