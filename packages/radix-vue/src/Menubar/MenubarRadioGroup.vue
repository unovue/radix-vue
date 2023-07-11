<script lang="ts">
import type { Ref } from "vue";
import { useVModel } from "@vueuse/core";

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
  changeModelValue: (value?: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { provide } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const props = defineProps<RadioGroupRootProps>();

const emits = defineEmits(["update:modelValue"]);

const { primitiveElement, currentElement: parentElement } =
  usePrimitiveElement();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

provide<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY, {
  modelValue,
  changeModelValue: (value?: string) => {
    modelValue.value = value;
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
