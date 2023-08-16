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
  if (!injectedValue) {
    return {};
  }

  const { orientation, reversed, min, max, modelValue } = injectedValue;
  const percentage = ((modelValue?.value ?? 0 - min) / (max - min)) * 100;

  const style: Record<string, string | number> = {
    position: "absolute",
    [orientation === "vertical" ? "top" : "left"]: `${
      reversed?.value ? 100 - percentage : 0
    }%`,
    [orientation === "vertical" ? "bottom" : "right"]: `${
      reversed?.value ? 0 : 100 - percentage
    }%`,
  };

  return style;
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
