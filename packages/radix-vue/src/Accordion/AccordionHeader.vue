<script setup lang="ts">
import { computed, inject } from "vue";
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";

const rootInjectedValue = inject<AccordionProvideValue>(
  ACCORDION_INJECTION_KEY
);
const itemInjectedValue = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);

const isOpen = computed(() =>
  Array.isArray(rootInjectedValue?.modelValue.value)
    ? rootInjectedValue?.modelValue.value.includes(
        itemInjectedValue?.value.value as string
      )
    : rootInjectedValue?.modelValue.value === itemInjectedValue?.value.value
);
</script>

<template>
  <h3
    :data-state="isOpen ? 'open' : 'closed'"
    :data-disabled="rootInjectedValue?.disabled.value ? 'true' : undefined"
  >
    <slot />
  </h3>
</template>
