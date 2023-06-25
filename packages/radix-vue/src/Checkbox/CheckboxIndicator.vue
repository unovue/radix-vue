<script setup lang="ts">
import { inject } from "vue";
import {
  CHECKBOX_INJECTION_KEY,
  type CheckboxProvideValue,
} from "./CheckboxRoot.vue";

const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY);
</script>

<template>
  <span v-if="injectedValue?.modelValue.value" style="pointer-events: none">
    <slot />
  </span>
</template>
