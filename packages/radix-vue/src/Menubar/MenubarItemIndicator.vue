<script lang="ts">
export interface MenubarItemIndicatorProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { MENUBAR_ITEM_SYMBOL } from "./utils";
const context = inject(MENUBAR_ITEM_SYMBOL);
</script>

<template>
  <PrimitiveSpan v-if="context?.modelValue.value" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
