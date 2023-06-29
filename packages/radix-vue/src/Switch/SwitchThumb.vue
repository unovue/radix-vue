<script lang="ts">
export interface SwitchThumbProps {
  asChild?: boolean;
}
</script>

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
    :data-state="injectedValue?.open?.value ? 'checked' : 'unchecked'"
    :data-disabled="injectedValue?.disabled ? '' : undefined"
    @click="injectedValue?.toggleOpen"
  >
    <slot />
  </PrimitiveSpan>
</template>
