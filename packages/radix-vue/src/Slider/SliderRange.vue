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

    if (injectedValue.inverted) {
      style.left = `${100 - (injectedValue.modelValue?.value ?? 0)}%`;
      style.right = 0;
    } else {
      const max = injectedValue.max ?? 100;
      const modelValue = injectedValue.modelValue?.value ?? 0;
      style.left = 0;
      style.right = `${max - modelValue}%`;
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
