<script lang="ts">
export interface SelectItemIndicatorProps {
  asChild?: boolean;
  forceMount?: boolean;
}
</script>

<script setup lang="ts">
import { inject, computed } from "vue";
import { PrimitiveSpan } from "@/Primitive";
import { SELECT_ITEM_SYMBOL } from "./utils";
import { type SelectItemProvideValue } from "./SelectItem.vue";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";

const rootInjectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);
const selectItemInjectedValue =
  inject<SelectItemProvideValue>(SELECT_ITEM_SYMBOL);

const visibleState = computed(() => {
  if (rootInjectedValue?.multiple) {
    return rootInjectedValue?.modelValue.value?.includes(
      selectItemInjectedValue!.value
    );
  } else {
    return (
      rootInjectedValue?.modelValue.value === selectItemInjectedValue?.value
    );
  }
});
</script>

<template>
  <PrimitiveSpan v-if="visibleState" style="pointer-events: none">
    <slot />
  </PrimitiveSpan>
</template>
