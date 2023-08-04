<script lang="ts">
export interface DropdownMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { DROPDOWN_MENU_ITEM_SYMBOL } from "./utils";

const props = withDefaults(defineProps<DropdownMenuItemIndicatorProps>(), {
  as: "span",
});
const context = inject(DROPDOWN_MENU_ITEM_SYMBOL);
</script>

<template>
  <Primitive
    v-if="context?.modelValue.value"
    v-bind="props"
    style="pointer-events: none"
  >
    <slot />
  </Primitive>
</template>
