<script lang="ts">
export interface SliderRangeProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const props = withDefaults(defineProps<SliderRangeProps>(), { as: "span" });
const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);

const sliderRangeStyle = computed(() => {
  if (injectedValue) {
    const style: Record<string, string | number> = {};

    const minValue = injectedValue.min;
    const maxValue = injectedValue.max;
    const modelValue = injectedValue.modelValue?.value ?? 0;

    // Calculate the percentage value based on min, max, and modelValue
    const percentage = ((modelValue - minValue) / (maxValue - minValue)) * 100;

    if (injectedValue.reversed?.value) {
      style.left = `${100 - percentage}%`;
      style.right = 0;
    } else {
      style.left = 0;
      style.right = `${100 - percentage}%`;
    }

    return style;
  }

  return {};
});
</script>

<template>
  <Primitive
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
    :as-child="props.asChild"
    :as="as"
    :style="sliderRangeStyle"
  />
</template>
