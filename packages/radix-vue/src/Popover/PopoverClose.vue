<script lang="ts">
export interface PopoverCloseProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

const injectedValue = inject(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive :type="as === 'button' ? 'button' : undefined" :as="props.as"
    :aria-expanded="injectedValue?.open.value || false" :data-state="injectedValue?.dataState.value"
    :as-child="props.asChild" @click="injectedValue?.hidePopover">
    <slot />
  </Primitive>
</template>
