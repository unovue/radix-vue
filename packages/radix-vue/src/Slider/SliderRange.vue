<script lang="ts">
export interface SliderRangeProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
</script>

<template>
  <span
    :data-disabled="injectedValue?.disabled"
    :data-orientation="injectedValue?.orientation"
    :style="`left: 0%; right: ${
      (injectedValue?.max ?? 100) - (injectedValue?.modelValue?.value ?? 0)
    }%`"
  />
</template>
