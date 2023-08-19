<script lang="ts">
import type { Ref, InjectionKey, ComputedRef } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import type { DataOrientation, Direction } from "../shared/types";

export interface SliderRootProps extends PrimitiveProps {
  defaultValue?: number;
  onValueCommit?: (value: any) => void;
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
  reversed?: Ref<boolean>;
  thumbOffset: Readonly<ComputedRef<number | undefined>>;
  min: number;
  max: number;
  step: number;
  thumbElement?: Ref<HTMLElement | undefined>;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { ref, provide, computed } from "vue";
import { useVModel } from "@vueuse/core";
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

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

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

const reversed = computed<boolean>(() => {
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
  orientation: props.orientation,
  dir: props.dir,
  reversed: reversed,
  thumbOffset: thumbOffset,
  min: props.min,
  max: props.max,
  step: props.step,
  thumbElement: thumbElement,
  disabled: props.disabled,
});

function convertToClosestStep(number: number, step: number) {
  const quotient = Math.floor(number / step);
  const remainder = number % step;

  const roundedValue =
    remainder <= step / 2 ? quotient * step : (quotient + 1) * step;

  return clamp(roundedValue, props.min, props.max);
}

function calculateModelValueFromPosition(position: number) {
  const range = props.max - props.min;
  let newValue = position * range;

  if (reversed.value) {
    newValue = props.max - newValue;
  }

  newValue = clamp(
    newValue + (reversed.value ? 0 : props.min),
    props.min,
    props.max
  );
  newValue = convertToClosestStep(newValue, props.step);

  return newValue;
}

function updateModelValue(value: number) {
  modelValue.value = convertToClosestStep(value, props.step);
}

let rootSliderRect: DOMRect | undefined;

function calculateSliderRelativePosition(
  pointerPosition: number,
  sliderRect: DOMRect
): number {
  let sliderSize = sliderRect.width;
  let sliderPosition = pointerPosition - sliderRect.left;

  if (props.orientation === "vertical") {
    sliderSize = sliderRect.height;
    sliderPosition = pointerPosition - sliderRect.top;
  }

  const isPointerInsideSlider =
    sliderPosition >= 0 && sliderPosition <= sliderSize;

  if (isPointerInsideSlider) {
    const sliderRelativePosition = sliderPosition / sliderSize;
    return sliderRelativePosition;
  } else if (sliderPosition <= 0) {
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

  let pointerPosition = e.clientX;
  if (props.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  pointerPosition -=
    (thumbElement.value?.offsetWidth ?? 0) / 2 - thumbOffset.value;

  const sliderRelativePosition = calculateSliderRelativePosition(
    pointerPosition,
    rootSliderRect
  );

  const newModelValue = calculateModelValueFromPosition(sliderRelativePosition);
  updateModelValue(newModelValue);

  document.addEventListener("pointermove", pointermove);
  document.addEventListener("pointerup", pointerup);
}

const pointermove = (e: PointerEvent) => {
  if (!rootSliderRect) {
    return;
  }

  let pointerPosition = e.clientX;
  if (props.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  pointerPosition -= (thumbElement.value?.offsetWidth ?? 0) / 2 - thumbOffset.value;
  const sliderRelativePosition = calculateSliderRelativePosition(
    pointerPosition,
    rootSliderRect
  );

  const newModelValue = calculateModelValueFromPosition(sliderRelativePosition);
  updateModelValue(newModelValue);
};


const pointerup = () => {
  document.removeEventListener("pointermove", pointermove);
  document.removeEventListener("pointerup", pointerup);
};
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
