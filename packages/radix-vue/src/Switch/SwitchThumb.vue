<script lang="ts">
export interface SwitchThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import {
  SWITCH_INJECTION_KEY,
  type SwitchProvideValue,
} from "./SwitchRoot.vue";

const injectedValue = inject<SwitchProvideValue>(SWITCH_INJECTION_KEY);
defineProps<SwitchThumbProps>();
</script>

<template>
  <PrimitiveSpan
    :data-state="injectedValue?.open?.value ? 'checked' : 'unchecked'"
    :data-disabled="injectedValue?.disabled ? '' : undefined"
    :as-child="asChild"
  >
    <slot />
  </PrimitiveSpan>
</template>
