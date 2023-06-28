<script lang="ts">
export interface ProgressIndicatorProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PROGRESS_INJECTION_KEY } from "./ProgressRoot.vue";
import type { ProgressProvideValue } from "./ProgressRoot.vue";

const injectedValue = inject<ProgressProvideValue>(PROGRESS_INJECTION_KEY);
</script>

<template>
  <div
    :data-state="
      injectedValue?.modelValue === injectedValue?.max ? 'complete' : 'loading'
    "
    :data-value="injectedValue?.modelValue"
    :data-max="injectedValue?.max"
    :style="`left: 0%; right: ${
      (injectedValue?.max ?? 100) - (injectedValue?.modelValue?.value ?? 0)
    }%`"
  ></div>
</template>
