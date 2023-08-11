<script lang="ts">
import type { Ref, InjectionKey, ComputedRef } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import type { DataOrientation, Direction } from "../shared/types";

export interface SliderRootProps extends PrimitiveProps {
  defaultValue?: string;
  value?: string;
  //onValueChange?: void;
  //onValueCommit?: void;
  name?: string;
  disabled?: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  modelValue?: number;
  inverted?: boolean;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
}

export const SLIDER_INJECTION_KEY =
  Symbol() as InjectionKey<SliderProvideValue>;

export interface SliderProvideValue {
  modelValue?: Readonly<Ref<number | undefined>>;
  changeModelValue: (value: any) => void;
  rootSliderElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
  dir?: Direction;
  inverted?: boolean;
  thumbOffset: Readonly<ComputedRef<number | undefined>>;
  min: number;
  max: number;
  step: number;
  thumbElement?: Ref<HTMLElement | undefined>;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { ref, toRef, provide, computed } from "vue";
import { clamp } from "./utils";

const props = withDefaults(defineProps<SliderRootProps>(), {
  asChild: false,
  disabled: false,
  orientation: "horizontal",
  activationMode: "automatic",
  inverted: false,
  min: 0,
  max: 100,
  step: 1,
  as: "span",
  minStepsBetweenThumbs: 0,
});

const emits = defineEmits(["update:modelValue"]);

const { primitiveElement, currentElement: rootSliderElement } =
  usePrimitiveElement();
const thumbElement = ref<HTMLElement>();

const thumbOffset = computed(() => {
  if (!props.modelValue) {
    return 0;
  }

  const offsetMultiplier = props.modelValue < 50 ? 1 : -1;
  return ((props.modelValue - 50) / 50) * 10 * offsetMultiplier;
});

provide<SliderProvideValue>(SLIDER_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emits("update:modelValue", value);
  },
  rootSliderElement: rootSliderElement,
  orientation: props.orientation,
  dir: props.dir,
  inverted: props.inverted,
  thumbOffset: thumbOffset,
  min: props.min,
  max: props.max,
  step: props.step,
  thumbElement: thumbElement,
  disabled: props.disabled,
});

function updateModelValue(value: number) {
  emits("update:modelValue", convertToClosestStep(value, props.step));
}

let rootSliderRect: DOMRect | undefined;

function calculateSliderRelativePosition(
  pointerPositionX: number,
  sliderRect: DOMRect
): number {
  const isPointerInsideSlider =
    pointerPositionX >= sliderRect.left &&
    pointerPositionX <= sliderRect.left + sliderRect.width;

  if (isPointerInsideSlider) {
    const sliderRelativePosition =
      (pointerPositionX - sliderRect.left) / sliderRect.width;
    return sliderRelativePosition;
  } else if (pointerPositionX <= sliderRect.left) {
    return 0;
  } else {
    return 1;
  }
}

function changeValue(e: MouseEvent) {
  if (thumbElement.value) {
    thumbElement.value.focus();
  }
  e.preventDefault();

  const sliderElement = rootSliderElement.value;
  if (!sliderElement) {
    return;
  }

  rootSliderRect = sliderElement.getBoundingClientRect();
  const pointerPositionX = e.clientX - 10 - thumbOffset.value;

  const sliderRelativePosition = calculateSliderRelativePosition(
    pointerPositionX,
    rootSliderRect
  );

  if (props.inverted) {
    const newModelValue = Math.round((1 - sliderRelativePosition) * 100);
    updateModelValue(newModelValue);
  } else {
    const newModelValue = Math.round(sliderRelativePosition * 100);
    updateModelValue(newModelValue);
  }

  document.addEventListener("pointermove", pointermove);
  document.addEventListener("pointerup", pointerup);
}

const pointermove = (e: PointerEvent) => {
  if (!rootSliderRect) {
    return;
  }

  if (thumbElement.value) {
    thumbElement.value.focus();
  }

  const pointerPositionX = e.clientX - 10 - thumbOffset.value;
  const sliderRelativePosition = calculateSliderRelativePosition(
    pointerPositionX,
    rootSliderRect
  );

  if (props.inverted) {
    const newModelValue = Math.round((1 - sliderRelativePosition) * 100);
    updateModelValue(newModelValue);
  } else {
    const newModelValue = Math.round(sliderRelativePosition * 100);
    updateModelValue(newModelValue);
  }
};

const pointerup = () => {
  document.removeEventListener("pointermove", pointermove);
  document.removeEventListener("pointerup", pointerup);
};

function convertToClosestStep(number: number, step: number) {
  const quotient = Math.floor(number / step);
  const remainder = number % step;

  const roundedValue =
    remainder <= step / 2 ? quotient * step : (quotient + 1) * step;

  return clamp(roundedValue, props.min, props.max);
}
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as-child="props.asChild"
    :as="as"
    :aria-disabled="props.disabled"
    :data-disabled="props.disabled"
    :data-orientation="props.orientation"
    @pointerdown="changeValue"
  >
    <slot />
    <input
      style="display: none"
      :value="props.modelValue"
      :aria-valuenow="props.modelValue"
      :name="props.name"
      :disabled="props.disabled"
      :data-disabled="props.disabled"
    />
  </Primitive>
</template>
