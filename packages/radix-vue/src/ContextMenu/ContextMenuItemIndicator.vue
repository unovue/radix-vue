<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface ContextMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { CONTEXT_MENU_ITEM_SYMBOL } from "./utils";
const context = inject(CONTEXT_MENU_ITEM_SYMBOL);
</script>

<template>
  <PrimitiveSpan v-if="context?.modelValue.value" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
