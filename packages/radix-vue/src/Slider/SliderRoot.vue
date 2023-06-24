<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation, Direction } from "../shared/types";

export interface SliderRootProps {
  // defaultValue?: string;
  // value?: string;
  name: string;
  disabled: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  modelValue?: number;
  inverted: boolean;
  min: number;
  max: number;
  step: number;
  minStepsBetweenThumbs: number;
}

export const SLIDER_INJECTION_KEY =
  Symbol() as InjectionKey<SliderProvideValue>;

export interface SliderProvideValue {
  modelValue?: Readonly<Ref<number | undefined>>;
  changeModelValue: (value: any) => void;
  parentElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
  dir?: Direction;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide } from "vue";

const props = withDefaults(defineProps<SliderRootProps>(), {
  disabled: false,
  orientation: "horizontal",
  activationMode: "automatic",
  inverted: false,
  min: 0,
  max: 100,
  step: 1,
  minStepsBetweenThumbs: 0,
});

const emits = defineEmits(["update:modelValue"]);

const parentElementRef = ref<HTMLElement>();

provide<SliderProvideValue>(SLIDER_INJECTION_KEY, {
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
  <slot />

  <input style="display: none" :value="props.value" :name="props.name" />
</template>
