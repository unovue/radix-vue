<script lang="ts">
export interface ContextMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { CONTEXT_MENU_ITEM_SYMBOL } from "./utils";
const context = inject(CONTEXT_MENU_ITEM_SYMBOL);

const props = defineProps<ContextMenuItemIndicatorProps>();
</script>

<template>
  <PrimitiveSpan
    v-if="context?.modelValue.value"
    :as-child="props.asChild"
    style="pointer-events: none"
  >
    <slot />
  </PrimitiveSpan>
</template>
