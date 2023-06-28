<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { SLIDER_INJECTION_KEY } from "./SliderRoot.vue";
import type { SliderProvideValue } from "./SliderRoot.vue";

const injectedValue = inject<SliderProvideValue>(SLIDER_INJECTION_KEY);
</script>

<template>
  <PrimitiveSpan
    :style="`left: 0%; right: ${
      (injectedValue?.max ?? 100) - (injectedValue?.modelValue?.value ?? 0)
    }%`"
  />
</template>
