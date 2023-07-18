<script lang="ts">
export interface MenubarItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { MENUBAR_ITEM_SYMBOL } from "./utils";
const context = inject(MENUBAR_ITEM_SYMBOL);

const props = defineProps<MenubarItemIndicatorProps>();
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
