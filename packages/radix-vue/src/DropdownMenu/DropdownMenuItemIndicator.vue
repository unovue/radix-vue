<script lang="ts">
export interface DropdownMenuItemIndicatorProps extends PrimitiveProps {
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveSpan, type PrimitiveProps } from "@/Primitive";
import { injectSafely } from "./utils";

import {
  DROPDOWN_CHECKBOX_ITEM_SYMBOL,
  type DropdownMenuCheckboxValue,
} from "./DropdownMenuCheckboxItem.vue";
import {
  DROPDOWN_RADIO_ITEM_SYMBOL,
  type DropdownMenuRadioValue,
} from "./DropdownMenuRadioItem.vue";
import { Components } from "./constants";
import { computed } from "vue";

const props = defineProps<DropdownMenuItemIndicatorProps>();

const checkboxInjectedValue = injectSafely<DropdownMenuCheckboxValue>(
  DROPDOWN_CHECKBOX_ITEM_SYMBOL,
  Components.CHECKBOX_ITEM
);

const radioInjectedValue = injectSafely<DropdownMenuRadioValue>(
  DROPDOWN_RADIO_ITEM_SYMBOL,
  Components.RADIO_ITEM
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
