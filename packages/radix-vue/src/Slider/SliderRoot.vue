<script lang="ts">
import type { Ref, InjectionKey, ComputedRef } from "vue";
import {
  PrimitiveSpan,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import type { DataOrientation, Direction } from "../shared/types";

export interface SliderRootProps extends PrimitiveProps {
  defaultValue?: string;
  value?: string;
  //onValueChange?: void;
  //onValueCommit?: void;
  name: string;
  disabled: boolean;
  orientation?: DataOrientation;
  dir?: Direction;
  modelValue?: number;
  inverted: boolean;
  min: number;
  max: number;
  step: number;
  extraStep: number;
  minStepsBetweenThumbs: number;
}

export const SLIDER_INJECTION_KEY =
  Symbol() as InjectionKey<SliderProvideValue>;

export interface SliderProvideValue {
  modelValue?: Readonly<Ref<number | undefined>>;
  changeModelValue: (value: any) => void;
  rootSliderElement: Ref<HTMLElement | undefined>;
  orientation: DataOrientation;
  dir?: Direction;
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

const props = withDefaults(defineProps<SliderRootProps>(), {
  asChild: false,
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

const { primitiveElement, currentElement: rootSliderElement } =
  usePrimitiveElement();
const thumbElement = ref<HTMLElement>();

const thumbOffset = computed(() => {
  if (!props.modelValue) {
    return 0;
  } else {
    if (props.modelValue < 50) {
      return ((props.modelValue - 50) / 50) * 10;
    } else {
      return ((props.modelValue - 50) / 50) * -10;
    }
  }
});

provide<SliderProvideValue>(SLIDER_INJECTION_KEY, {
  modelValue: toRef(() => props.modelValue),
  changeModelValue: (value: any) => {
    emits("update:modelValue", value);
  },
  rootSliderElement: rootSliderElement,
  orientation: props.orientation,
  dir: props.dir,
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

let rootSliderRect: DOMRect;

function changeValue(e: MouseEvent) {
  if (thumbElement.value) {
    thumbElement.value.focus();
  }
  e.preventDefault();
  if (rootSliderElement.value) {
    rootSliderRect = rootSliderElement.value.getBoundingClientRect();
    if (
      e.clientX - 10 - thumbOffset.value > rootSliderRect.left &&
      e.clientX - 10 - thumbOffset.value <
        rootSliderRect.left + rootSliderRect.width
    ) {
      updateModelValue(
        Math.round(
          ((e.clientX - 10 - thumbOffset.value - rootSliderRect.left) /
            rootSliderRect.width) *
            100
        )
      );
    }

    document.addEventListener("pointermove", pointermove);
    document.addEventListener("pointerup", pointerup);
  }
}

const pointermove = (e: PointerEvent) => {
  if (thumbElement.value) {
    thumbElement.value.focus();
  }
  if (
    e.clientX - 10 - thumbOffset.value > rootSliderRect!.left &&
    e.clientX - 10 - thumbOffset.value <
      rootSliderRect!.left + rootSliderRect!.width
  ) {
    updateModelValue(
      ((e.clientX - 10 - thumbOffset.value - rootSliderRect!.left) /
        rootSliderRect!.width) *
        100
    );
  }
  if (e.clientX - 10 - thumbOffset.value <= rootSliderRect!.left) {
    updateModelValue(props.min);
  }
  if (
    e.clientX - 10 - thumbOffset.value >=
    rootSliderRect!.left + rootSliderRect!.width
  ) {
    updateModelValue(props.max);
  }
};

const pointerup = (e: PointerEvent) => {
  document.removeEventListener("pointermove", pointermove);
  document.removeEventListener("pointerup", pointerup);
};

function convertToClosestStep(number: number, step: number) {
  const quotient = Math.floor(number / step);
  const remainder = number % step;

  if (remainder <= step / 2) {
    return quotient * step;
  } else {
    return (quotient + 1) * step;
  }
}
</script>

<template>
  <PrimitiveSpan
    ref="primitiveElement"
    :as-child="props.asChild"
    @pointerdown="changeValue"
  >
    <slot />
    <input
      style="display: none"
      :value="props.modelValue"
      :aria-valuenow="props.modelValue"
      :name="props.name"
    />
  </PrimitiveSpan>
</template>
