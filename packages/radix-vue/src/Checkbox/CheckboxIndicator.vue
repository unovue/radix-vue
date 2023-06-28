<script lang="ts">
export interface CheckboxRootProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import {
  CHECKBOX_INJECTION_KEY,
  type CheckboxProvideValue,
} from "./CheckboxRoot.vue";

const injectedValue = inject<CheckboxProvideValue>(CHECKBOX_INJECTION_KEY);
</script>

<template>
  <span
    v-if="injectedValue?.modelValue.value"
    style="pointer-events: none"
    :data-disabled="injectedValue.disabled ? '' : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'"
  >
    <slot />
  </span>
</template>
