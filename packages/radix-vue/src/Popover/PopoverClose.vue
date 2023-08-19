<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const context = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

export interface PopoverCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="props.asChild"
    @click="context?.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
