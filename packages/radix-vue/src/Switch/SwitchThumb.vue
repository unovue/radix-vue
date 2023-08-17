<script lang="ts">
export interface SwitchThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import {
  SWITCH_INJECTION_KEY,
  type SwitchProvideValue,
} from "./SwitchRoot.vue";

const injectedValue = inject<SwitchProvideValue>(SWITCH_INJECTION_KEY);
withDefaults(defineProps<SwitchThumbProps>(), { as: "span" });
</script>

<template>
  <Primitive
    :data-state="injectedValue?.open?.value ? 'checked' : 'unchecked'"
    :data-disabled="injectedValue?.disabled ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
