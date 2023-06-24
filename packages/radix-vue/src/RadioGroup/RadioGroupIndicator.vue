<script setup lang="ts">
import { inject } from "vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./RadioGroupRoot.vue";

const injectedValue = inject<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY);
const value = inject<string>("radioItemValue");
</script>

<template>
  <span
    v-if="injectedValue?.modelValue?.value === value"
    :data-state="
      injectedValue?.modelValue?.value === value ? 'checked' : 'unchecked'
    "
  >
    <slot />
  </span>
</template>
