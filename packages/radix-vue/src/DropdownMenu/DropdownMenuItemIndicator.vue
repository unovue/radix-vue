<script lang="ts">
export interface DropdownMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { computed } from "vue";
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { injectSafely } from "@/shared/injectSafely";

import {
  DROPDOWN_CHECKBOX_ITEM_SYMBOL,
  type DropdownMenuCheckboxValue,
} from "./DropdownMenuCheckboxItem.vue";
import {
  DROPDOWN_RADIO_ITEM_SYMBOL,
  type DropdownMenuRadioValue,
} from "./DropdownMenuRadioItem.vue";

const props = defineProps<DropdownMenuItemIndicatorProps>();

const checkboxInjectedValue = injectSafely<DropdownMenuCheckboxValue>(
  DROPDOWN_CHECKBOX_ITEM_SYMBOL
);

const radioInjectedValue = injectSafely<DropdownMenuRadioValue>(
  DROPDOWN_RADIO_ITEM_SYMBOL
);

const injectedValue = computed(() => {
  return (
    checkboxInjectedValue?.modelValue?.value ??
    radioInjectedValue?.modelValue?.value
  );
});
</script>

<template>
  <PrimitiveSpan
    v-if="injectedValue"
    v-bind="props"
    style="pointer-events: none"
  >
    <slot />
  </PrimitiveSpan>
</template>
