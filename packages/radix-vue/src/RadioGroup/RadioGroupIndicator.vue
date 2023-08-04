<script lang="ts">
export interface RadioGroupIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import {
  RADIO_ITEM_INJECTION_KEY,
  type RadioItemProvideValue,
} from "./RadioGroupRoot.vue";

withDefaults(defineProps<RadioGroupIndicatorProps>(), {
  as: "span",
});

const injectedItem = inject<RadioItemProvideValue>(RADIO_ITEM_INJECTION_KEY);
</script>

<template>
  <Primitive
    v-if="injectedItem?.checked"
    :data-state="injectedItem?.checked ? 'checked' : 'unchecked'"
    :data-disabled="injectedItem?.disabled ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
