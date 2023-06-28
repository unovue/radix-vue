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
  changeModelValue: (value?: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = defineProps<RadioGroupRootProps>();

const emits = defineEmits(["update:modelValue"]);

const parentElementRef: Ref<HTMLElement | undefined> = ref();

provide<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value?: string) => {
    emits("update:modelValue", value);
  },
  parentElement: parentElementRef,
});
</script>

<template>
  <div ref="parentElementRef" role="radiogroup" aria-label="radiogroup">
    <slot />
  </div>
</template>
