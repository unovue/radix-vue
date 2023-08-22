<script lang="ts">
export interface SliderThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";
import { convertValueToPercentage, clamp } from "./utils";

defineOptions({
  inheritAttrs: false,
});

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
const { primitiveElement, currentElement: thumbElement } =
  usePrimitiveElement();

onMounted(() => {
  if (injectedValue?.thumbElements && thumbElement.value) {
    injectedValue.thumbElements.value.push(thumbElement.value);
  }
});

const props = withDefaults(defineProps<SliderThumbProps>(), {
  as: "span",
});

const index = computed<number>(() => {
  if (injectedValue && injectedValue.thumbElements && thumbElement.value) {
    const foundIndex = injectedValue.thumbElements.value.indexOf(
      thumbElement.value
    );
    if (foundIndex !== -1) {
      return foundIndex;
    }
  }

  return -1;
});

const value = computed<number | undefined>(() => {
  if (injectedValue?.modelValue && index.value !== -1) {
    return injectedValue.modelValue.value?.[index.value];
  }

  return undefined;
});

const percent = computed(() => {
  if (value.value === undefined) {
    return 0;
  }

  const minValue = injectedValue?.min ?? 0;
  const maxValue = injectedValue?.max ?? 100;

  return convertValueToPercentage(value.value, minValue, maxValue);
});

const thumbHalfSize = computed(
  () => (thumbElement.value?.offsetWidth ?? 0) / 2
);

const thumbOffset = computed(() => {
  return thumbHalfSize.value;
});

const thumbStyle = computed(() => {
  if (!injectedValue) {
    return {};
  }

  const { orientation, flipped } = injectedValue;
  const style: Record<string, string | number> = {
    position: "absolute",
    transform:
      orientation === "vertical" ? "translateY(-50%)" : "translateX(-50%)",
  };

  if (orientation === "vertical") {
    style.top = `${flipped?.value ? 100 - percent.value : percent.value}%`;
  } else {
    style.left = `${flipped?.value ? 100 - percent.value : percent.value}%`;
  }

  return style;
});

function calculateThumbRelativePosition(
  pointerPosition: number,
  sliderRect: DOMRect
): number {
  let sliderRootSize = sliderRect.width;
  let thumbPosition = pointerPosition - sliderRect.left;

  if (injectedValue?.orientation === "vertical") {
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
  if (!injectedValue) {
    return 0;
  }

  const position = calculateThumbRelativePosition(pointerPosition, sliderRect);

  // Calculate new value.
  const range = injectedValue?.max - injectedValue?.min;
  let newValue = position * range;

  if (injectedValue.flipped?.value) {
    newValue = injectedValue?.max - newValue;
  }

  // Clamp to ensure that we are not outside the boundries.
  newValue = clamp(
    newValue + (injectedValue.flipped?.value ? 0 : injectedValue?.min),
    [injectedValue.min, injectedValue.max]
  );

  // Convert to closest step.
  const step = injectedValue.step;
  const quotient = Math.floor(newValue / step);
  const remainder = newValue % step;
  const roundedValue =
    remainder <= step / 2 ? quotient * step : (quotient + 1) * step;

  return clamp(roundedValue, [injectedValue.min, injectedValue.max]);
}

function setNewValue(value: number): void {
  if (!injectedValue) {
    return;
  }

  const copyExistingValues = injectedValue.modelValue?.value ?? [];
  copyExistingValues[index.value] = value;

  injectedValue.changeModelValue(copyExistingValues);
}

let rootSliderElementRect: DOMRect | undefined;

function onPointerDown(e: MouseEvent) {
  e.preventDefault();

  if (!injectedValue) {
    return;
  }

  if (thumbElement.value) {
    thumbElement.value.focus();
  }

  const rootSliderElement = injectedValue.rootSliderElement.value;
  if (!rootSliderElement) {
    return;
  }

  rootSliderElementRect = rootSliderElement.getBoundingClientRect();

  let pointerPosition = e.clientX;
  if (injectedValue.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  pointerPosition -= thumbHalfSize.value - thumbOffset.value;

  const newValue = calculateValueFromPosition(
    pointerPosition,
    rootSliderElementRect
  );

  setNewValue(newValue);

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(e: PointerEvent) {
  if (!injectedValue) {
    return;
  }

  if (!rootSliderElementRect) {
    return;
  }

  let pointerPosition = e.clientX;
  if (injectedValue.orientation === "vertical") {
    pointerPosition = e.clientY;
  }

  pointerPosition -= thumbHalfSize.value - thumbOffset.value;

  const newValue = calculateValueFromPosition(
    pointerPosition,
    rootSliderElementRect
  );

  setNewValue(newValue);
}

function onPointerUp() {
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);
}
</script>

<template>
  <span :style="thumbStyle">
    <Primitive
      v-bind="$attrs"
      ref="primitiveElement"
      role="slider"
      tabindex="0"
      :data-disabled="injectedValue?.disabled"
      :data-orientation="injectedValue?.orientation"
      :aria-valuenow="value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      :as-child="props.asChild"
      :as="as"
      @pointerdown="onPointerDown"
    >
    </Primitive>
  </span>
</template>
