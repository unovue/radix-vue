<script setup lang="ts">
import { inject } from "vue";
import { PROGRESS_INJECTION_KEY } from "./ProgressRoot.vue";
import type { ProgressProvideValue } from "./ProgressRoot.vue";

const injectedValue = inject<ProgressProvideValue>(PROGRESS_INJECTION_KEY);
</script>

<template>
  <div
    :style="`left: 0%; right: ${
      (injectedValue?.max | 100) - injectedValue?.modelValue?.value
    }%`"
  ></div>
</template>
