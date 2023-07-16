<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface MenubarItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { MENUBAR_ITEM_SYMBOL } from "./utils";
const context = inject(MENUBAR_ITEM_SYMBOL);

const props = defineProps<MenubarItemIndicatorProps>();
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
