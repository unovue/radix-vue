<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveH3 } from "@/Primitive";
import {
  ACCORDION_IMPL_INJECTION_KEY,
  type AccordionImplProvideValue,
} from "./AccordionImpl.vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";

const accordianImplInjectedValue = inject<AccordionImplProvideValue>(
  ACCORDION_IMPL_INJECTION_KEY
);
const accordianItemInjectedValue = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);
</script>

<template>
  <PrimitiveH3
    :data-orientation="accordianImplInjectedValue?.orientation"
    :data-state="accordianItemInjectedValue?.open ? 'open' : 'closed'"
    :data-disabled="accordianItemInjectedValue?.disabled ? '' : undefined"
  >
    <slot />
  </PrimitiveH3>
</template>
