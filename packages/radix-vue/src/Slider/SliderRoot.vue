<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import type { DataOrientation, Direction } from "../shared/types";

export interface SliderRootProps extends PrimitiveProps {
  name?: string;
  defaultValue?: number[];
  modelValue?: number[];
  onValueCommit?: (value: number[]) => void;
  disabled?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  inverted?: boolean;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
}

export interface SliderProvideValue {
  orientation: DataOrientation;
  dir?: Direction;
  flipped?: Ref<boolean>;
  disabled: boolean;
  min: number;
  max: number;
  step: number;
  modelValue?: Readonly<Ref<number[] | undefined>>;
  changeModelValue: (value: number[]) => void;
  rootSliderElement: Ref<HTMLElement | undefined>;
  thumbElements: Ref<HTMLElement[]>;
}

export const SLIDER_INJECTION_KEY =
  Symbol() as InjectionKey<SliderProvideValue>;

export interface SliderRootEmits {
  (e: "update:modelValue", payload: number): void;
}
</script>

<script setup lang="ts">
import { ref, provide, computed } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<SliderRootProps>(), {
  as: "span",
  asChild: false,
  disabled: false,
  inverted: false,
  orientation: "horizontal",
  min: 0,
  max: 100,
  step: 1,
  minStepsBetweenThumbs: 0,
});

const emits = defineEmits<SliderRootEmits>();

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

const { primitiveElement, currentElement: rootSliderElement } =
  usePrimitiveElement();

const thumbElements = ref<HTMLElement[]>([]);

const name = computed(() => {
  const modelValueLength = modelValue.value?.length || 0;
  return modelValueLength > 1 ? `${props.name}[]` : props.name;
});

const flipped = computed<boolean>(() => {
  if (props.dir === "rtl" && props.inverted) {
    return false;
  }

  return props.dir === "rtl" || props.inverted;
});

provide<SliderProvideValue>(SLIDER_INJECTION_KEY, {
  modelValue,
  changeModelValue: (value: any) => {
    modelValue.value = value;
    if (value && props.onValueCommit) {
      props.onValueCommit(value);
    }
  },
  rootSliderElement: rootSliderElement,
  thumbElements: thumbElements,
  orientation: props.orientation,
  dir: props.dir,
  flipped: flipped,
  min: props.min,
  max: props.max,
  step: props.step,
  disabled: props.disabled,
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as-child="props.asChild"
    :as="as"
    :aria-disabled="props.disabled"
    :data-disabled="props.disabled"
    :data-orientation="props.orientation"
  >
    <slot />
    <input
      v-for="value in modelValue?.values"
      :key="value"
      style="display: none"
      :value="props.modelValue"
      :aria-valuenow="value"
      :name="name"
      :disabled="props.disabled"
      :data-disabled="props.disabled"
    />
  </Primitive>
</template>
