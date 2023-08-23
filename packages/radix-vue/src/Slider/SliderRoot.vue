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
import { clamp } from "./utils";

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

function calculateThumbRelativePosition(
  pointerPosition: number,
  sliderRect: DOMRect
): number {
  let sliderRootSize = sliderRect.width;
  let thumbPosition = pointerPosition - sliderRect.left;

  if (props.orientation === "vertical") {
    sliderRootSize = sliderRect.height;
    thumbPosition = pointerPosition - sliderRect.top;
  }

  const isPointerInsideSlider =
    thumbPosition >= 0 && thumbPosition <= sliderRootSize;

  if (isPointerInsideSlider) {
    const sliderRelativePosition = thumbPosition / sliderRootSize;
    return sliderRelativePosition;
  } else if (thumbPosition <= 0) {
    return 0;
  }

  return 1;
}

function calculateValueFromPosition(
  pointerPosition: number,
  sliderRect: DOMRect
): number {
  const position = calculateThumbRelativePosition(pointerPosition, sliderRect);

  // Calculate new value.
  const range = props.max - props.min;
  let newValue = position * range;

  if (flipped.value) {
    newValue = props.max - newValue;
  }

  // Clamp to ensure that we are not outside the boundries.
  newValue = clamp(newValue + (flipped.value ? 0 : props.min), [
    props.min,
    props.max,
  ]);

  // Convert to closest step.
  const step = props.step;
  const quotient = Math.floor(newValue / step);
  const remainder = newValue % step;
  const roundedValue =
    remainder <= step / 2 ? quotient * step : (quotient + 1) * step;

  return clamp(roundedValue, [props.min, props.max]);
}

function setNewValue(value: number, index: number): void {
  const copyExistingValues = modelValue.value ?? [];
  copyExistingValues[index] = value;

  modelValue.value = copyExistingValues;
  if (value && props.onValueCommit) {
    props.onValueCommit(copyExistingValues);
  }
}

let rootSliderElementRect: DOMRect | undefined;
let activeThumbIndex: number | undefined;
let thumbHalfSize: number = 0;

function onPointerDown(e: MouseEvent) {
  e.preventDefault();

  if (!thumbElements.value.length) {
    return;
  }

  if (!rootSliderElement.value) {
    return;
  }

  rootSliderElementRect = rootSliderElement.value.getBoundingClientRect();

  let pointerPosition = e.clientX;
  if (props.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  let nearestDistance = Number.MAX_VALUE;

  // Calculate distances from pointer position to each thumb's center
  thumbElements.value.forEach((thumbElement, index) => {
    const thumbRect = thumbElement.getBoundingClientRect();
    const thumbCenter =
      props.orientation === "vertical"
        ? (thumbRect.top + thumbRect.bottom) / 2
        : (thumbRect.left + thumbRect.right) / 2;

    thumbHalfSize =
      props.orientation === "vertical"
        ? thumbElement.offsetHeight / 2
        : thumbElement.offsetWidth / 2;

    pointerPosition += thumbHalfSize;

    const distance = Math.abs(thumbCenter - pointerPosition);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      activeThumbIndex = index;
    }
  });

  if (activeThumbIndex === undefined) {
    return;
  }

  const nearestThumb = thumbElements.value[activeThumbIndex];

  nearestThumb.focus();

  pointerPosition -= thumbHalfSize;

  const newValue = calculateValueFromPosition(
    pointerPosition,
    rootSliderElementRect
  );

  setNewValue(newValue, activeThumbIndex);

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(e: PointerEvent) {
  if (!rootSliderElementRect) {
    return;
  }

  if (activeThumbIndex === undefined) {
    return;
  }

  let pointerPosition = e.clientX;
  if (props.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  const newValue = calculateValueFromPosition(
    pointerPosition,
    rootSliderElementRect
  );

  setNewValue(newValue, activeThumbIndex);
}

function onPointerUp() {
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
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
    @pointerdown="onPointerDown"
  >
    <slot />
    <input
      v-for="value in modelValue"
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
