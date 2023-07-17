<script lang="ts">
export interface DropdownMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { DROPDOWN_MENU_ITEM_SYMBOL } from "./utils";

const props = defineProps<DropdownMenuItemIndicatorProps>();
const context = inject(DROPDOWN_MENU_ITEM_SYMBOL);
</script>

<template>
  <PrimitiveSpan
    v-if="context?.modelValue.value"
    v-bind="props"
    style="pointer-events: none"
  >
    <slot />
  </PrimitiveSpan>
</template>
