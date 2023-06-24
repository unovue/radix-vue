<script setup lang="ts">
import { inject } from "vue";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
</script>

<template>
  <span
    :style="`left: 0%; right: ${
      injectedValue?.max - injectedValue?.modelValue?.value
    }%`"
  />
</template>
