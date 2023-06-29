<script lang="ts">
export interface SliderThumbProps {
  asChild?: boolean;

  // INTERNAL
  class?: string;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import { PrimitiveSpan, usePrimitiveElement } from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
const { primitiveElement, currentElement: thumbElement } =
  usePrimitiveElement();

onMounted(() => {
  if (injectedValue?.thumbElement)
    injectedValue.thumbElement.value = thumbElement.value;
});

const props = withDefaults(defineProps<SliderThumbProps>(), {
  asChild: false,
});

let extraStep = 2;

function handleKeydown(e: KeyboardEvent) {
  if (!injectedValue) return;
  //prevent default when enter/space
  if (e.keyCode === 32 || e.key === "Enter") {
    e.preventDefault();
  }
  const step = Number(injectedValue?.step);
  const value = Number(injectedValue.modelValue?.value);
  //add value
  if (e.key === "ArrowUp" || e.key === "ArrowRight") {
    if (e.shiftKey) {
      e.preventDefault();

      if (value + extraStep >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (value + extraStep <= injectedValue?.min) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(value + extraStep);
      }
    } else {
      e.preventDefault();
      if (value + step >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (value + step <= injectedValue?.min) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(value + step);
      }
    }
  }
  //subtract value
  if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
    if (e.shiftKey) {
      e.preventDefault();
      if (value - extraStep >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (value - extraStep <= injectedValue?.min) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(value - extraStep);
      }
    } else {
      e.preventDefault();
      if (value - step >= injectedValue?.max) {
        injectedValue?.changeModelValue(injectedValue?.max);
      } else if (value - step <= injectedValue?.min) {
        injectedValue?.changeModelValue(injectedValue?.min);
      } else {
        injectedValue?.changeModelValue(value - step);
      }
    }
  }
}
</script>

<template>
  <span
    :style="`transform: translateX(-50%); position: absolute; left: calc(${injectedValue?.modelValue?.value}%)`"
  >
    <PrimitiveSpan
      :class="props.class"
      ref="primitiveElement"
      role="slider"
      tabindex="0"
      :data-disabled="injectedValue?.disabled"
      :data-orientation="injectedValue?.orientation"
      :aria-valuenow="injectedValue?.modelValue?.value"
      :aria-valuemin="injectedValue?.min"
      :aria-valuemax="injectedValue?.max"
      :aria-orientation="injectedValue?.orientation"
      @keydown="handleKeydown"
    >
    </PrimitiveSpan>
  </span>
</template>
