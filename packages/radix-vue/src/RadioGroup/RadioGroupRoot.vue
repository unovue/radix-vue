<script lang="ts">
import type { Ref } from "vue";
import type { DataOrientation, Direction } from "@/shared/types";

export interface RadioGroupRootProps {
  asChild?: boolean;
  defaultValue?: string;
  value?: string;
  //onValueChange?: void;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  loop?: boolean;
  modelValue?: string | string[];
}

export const RADIO_GROUP_INJECTION_KEY = "RadioGroup" as const;

export interface RadioGroupProvideValue {
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value?: string) => void;
  parentElement: Ref<HTMLElement | undefined>;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<RadioGroupRootProps>(), {
  asChild: false,
  disabled: false,
  orientation: undefined,
  loop: true,
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef: Ref<HTMLElement | undefined> = ref();

provide<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value?: string) => {
    emits("update:modelValue", value);
  },
  parentElement: parentElementRef,
  disabled: props.disabled,
});
</script>

<template>
  <div
    ref="parentElementRef"
    role="radiogroup"
    aria-label="radiogroup"
    :data-disabled="props.disabled"
  >
    <slot />
  </div>
</template>
