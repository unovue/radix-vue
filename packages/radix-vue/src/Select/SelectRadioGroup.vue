<script lang="ts">
import type { Ref } from "vue";

export interface RadioGroupRootProps {
  asChild?: boolean;
  value?: string;
  defaultValue?: string;
  //disabled?: boolean;
  //onValueChange?: void;
  modelValue?: string | string[];
}

export const RADIO_GROUP_INJECTION_KEY = "RadioGroup" as const;

export interface RadioGroupProvideValue {
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { provide, inject } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import {
  type SelectProvideValue,
  SELECT_INJECTION_KEY,
} from "./SelectRoot.vue";

const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const props = defineProps<RadioGroupRootProps>();

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const selectValue = injectedValue?.modelValue;

provide<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY, {
  modelValue: selectValue,
  changeModelValue: (value: string) => {
    injectedValue?.setValue(value);
  },
  parentElement,
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    role="radiogroup"
    aria-label="radiogroup"
  >
    <slot />
  </PrimitiveDiv>
</template>
