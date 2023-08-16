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
import { clamp } from "./utils";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
const { primitiveElement, currentElement: thumbElement } =
  usePrimitiveElement();

onMounted(() => {
  if (injectedValue?.thumbElement)
    injectedValue.thumbElement.value = thumbElement.value;
});

const props = withDefaults(defineProps<SliderThumbProps>(), {
  as: "span",
});

let extraStep = 10;

function handleKeydown(e: KeyboardEvent) {
  if (!injectedValue) return;

  // Prevent default when enter/space
  if (e.keyCode === 32 || e.key === "Enter") {
    e.preventDefault();
  }

  const step = Number(injectedValue.step);
  const value = Number(injectedValue.modelValue?.value);
  const isShiftPressed = e.shiftKey;
  let newValue = value;

  const isArrowUpOrRight = e.key === "ArrowUp" || e.key === "ArrowRight";
  const isArrowDownOrLeft = e.key === "ArrowDown" || e.key === "ArrowLeft";

  const isPageUp = e.key === "PageUp";
  const isPageDown = e.key === "PageDown";

  const adjustedExtraStep = isShiftPressed ? extraStep * step : step;

  if (injectedValue.reversed?.value) {
    if (isArrowDownOrLeft) {
      newValue += adjustedExtraStep;
    } else if (isArrowUpOrRight) {
      newValue -= adjustedExtraStep;
    }
  } else {
    if (isArrowUpOrRight) {
      newValue += adjustedExtraStep;
    } else if (isArrowDownOrLeft) {
      newValue -= adjustedExtraStep;
    }
  }

  if (isPageUp || isPageDown) {
    e.preventDefault();

    const step = Number(injectedValue.step);
    const value = Number(injectedValue.modelValue?.value);
    let newValue = value;

    if (isPageUp) {
      newValue += step * extraStep;
    } else if (isPageDown) {
      newValue -= step * extraStep;
    }

    newValue = clamp(newValue, injectedValue.min, injectedValue.max);

    injectedValue.changeModelValue(newValue);
  }

  if (e.key === "Home") {
    newValue = injectedValue.min;
  } else if (e.key === "End") {
    newValue = injectedValue.max;
  }

  newValue = clamp(newValue, injectedValue.min, injectedValue.max);

  injectedValue.changeModelValue(newValue);
}

const thumbStyle = computed(() => {
  if (!injectedValue) {
    return {};
  }

  const { orientation, reversed, min, max, modelValue } = injectedValue;
  const style: Record<string, string | number> = {
    position: "absolute",
    transform: orientation === "vertical" ? "translateY(-50%)" : "translateX(-50%)",
  };

  const percentage = ((modelValue?.value ?? 0 - min) / (max - min)) * 100;

  if (orientation === "vertical") {
    style.top = `${reversed?.value ? 100 - percentage : percentage}%`;
  } else {
    style.left = `${reversed?.value ? 100 - percentage : percentage}%`;
  }

  return style;
});
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
      :aria-valuenow="injectedValue?.modelValue?.value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      :as-child="props.asChild"
      :as="as"
      @keydown="handleKeydown"
    >
    </Primitive>
  </span>
</template>
