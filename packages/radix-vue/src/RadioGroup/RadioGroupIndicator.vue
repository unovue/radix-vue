<script lang="ts">
export interface RadioGroupIndicatorProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveSpan } from "@/Primitive";
import { inject } from "vue";
import {
  RADIO_ITEM_INJECTION_KEY,
  type RadioItemProvideValue,
} from "./RadioGroupRoot.vue";

withDefaults(defineProps<RadioGroupIndicatorProps>(), {
  asChild: false,
});

const injectedItem = inject<RadioItemProvideValue>(RADIO_ITEM_INJECTION_KEY);
</script>

<template>
  <PrimitiveSpan
    :asChild="asChild"
    v-if="injectedItem?.checked"
    :data-state="injectedItem?.checked ? 'checked' : 'unchecked'"
    :data-disabled="injectedItem?.disabled ? '' : undefined"
  >
    <slot />
  </PrimitiveSpan>
</template>
