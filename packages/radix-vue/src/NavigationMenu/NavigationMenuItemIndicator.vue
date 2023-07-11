<script lang="ts">
export interface NavigationMenuItemIndicatorProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { NAVIGATION_MENU_ITEM_SYMBOL } from "./utils";
const context = inject(NAVIGATION_MENU_ITEM_SYMBOL);
</script>

<template>
  <PrimitiveSpan v-if="context?.modelValue.value" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
