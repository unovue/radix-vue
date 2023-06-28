<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import {
  SWITCH_INJECTION_KEY,
  type SwitchProvideValue,
} from "./SwitchRoot.vue";

const injectedValue = inject<SwitchProvideValue>(SWITCH_INJECTION_KEY);
</script>

<template>
  <PrimitiveSpan
    :data-state="injectedValue?.modelValue?.value ? 'checked' : 'unchecked'"
    :data-disabled="injectedValue?.disabled ? '' : undefined"
    @click="injectedValue?.toggleModelValue"
  >
    <slot />
  </PrimitiveSpan>
</template>
