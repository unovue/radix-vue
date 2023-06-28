<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveButton } from "@/Primitive";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);
</script>

<template>
  <PrimitiveButton
    type="button"
    :aria-expanded="injectedValue?.modelValue.value || false"
    :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
    @click="injectedValue?.hideTooltip"
  >
    <slot />
  </PrimitiveButton>
</template>
