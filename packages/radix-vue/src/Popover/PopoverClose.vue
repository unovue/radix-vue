<script lang="ts">
export interface PopoverCloseProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { useInjected } from "@/shared/useInjected";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

const { open, dataState, hidePopover } = useInjected(POPOVER_INJECTION_KEY);

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: "button",
});
</script>

<template>
  <Primitive :type="as === 'button' ? 'button' : undefined" :as="props.as" :aria-expanded="open || false"
    :data-state="dataState" :as-child="props.asChild" @click="hidePopover()">
    <slot />
  </Primitive>
</template>
