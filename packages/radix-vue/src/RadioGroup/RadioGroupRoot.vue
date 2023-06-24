<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface RadioRootProps {
  // defaultValue?: string;
  // value?: string;
  orientation?: DataOrientation;
  dir?: Direction;
  name?: string;
  modelValue?: string | string[];
}

export const RADIO_INJECTION_KEY = Symbol() as InjectionKey<RadioProvideValue>;

export interface RadioProvideValue {
  modelValue?: Readonly<Ref<string | string[] | undefined>>;
  changeModelValue: (value: any) => void;
  name: string;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<RadioRootProps>(), {
  orientation: undefined,
  activationMode: "automatic",
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef = ref<HTMLElement>();

provide<RadioProvideValue>(RADIO_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emits("update:modelValue", value);
  },
  parentElement: parentElementRef,
  orientation: props.orientation,
  dir: props.dir,
});
</script>

<template>
  <div
    ref="parentElementRef"
    :dir="props.dir"
    :data-orientation="props.orientation"
  >
    <slot />
  </div>
</template>
