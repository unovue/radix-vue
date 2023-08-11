<script lang="ts">
export interface ContextMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { CONTEXT_MENU_ITEM_SYMBOL } from "./utils";
const context = inject(CONTEXT_MENU_ITEM_SYMBOL);

const props = withDefaults(defineProps<ContextMenuItemIndicatorProps>(), {
  as: "span",
});
</script>

<template>
  <Primitive
    :as="as"
    v-if="context?.modelValue.value"
    :as-child="props.asChild"
    style="pointer-events: none"
  >
    <slot />
  </Primitive>
</template>
