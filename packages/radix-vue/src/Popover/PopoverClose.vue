<script lang="ts">
export interface PopoverCloseProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :as-child="props.asChild"
    @click="injectedValue?.hidePopover"
  >
    <slot />
  </Primitive>
</template>
