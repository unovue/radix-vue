<script lang="ts">
export interface MenubarItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { MENUBAR_ITEM_SYMBOL } from "./utils";
const context = inject(MENUBAR_ITEM_SYMBOL);

const props = withDefaults(defineProps<MenubarItemIndicatorProps>(), {
  as: "span",
});
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
