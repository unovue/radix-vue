<script setup lang="ts">
import { inject } from "vue";
import { CollapsibleTrigger } from "../Collapsible/";
import {
  ACCORDION_IMPL_INJECTION_KEY,
  type AccordionImplProvideValue,
  ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  type AccordionCollapsibleProvideValue,
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
const accordianCollapsibleInjectedValue =
  inject<AccordionCollapsibleProvideValue>(ACCORDION_COLLAPSIBLE_INJECTION_KEY);
</script>

<template>
  <CollapsibleTrigger
    data-radix-vue-collection-item
    :aria-disabled="
      (accordianItemInjectedValue?.open &&
        !accordianCollapsibleInjectedValue?.collapsible) ||
      undefined
    "
    :data-orientation="accordianImplInjectedValue?.orientation"
    :id="accordianItemInjectedValue?.triggerId"
  >
    <slot />
  </CollapsibleTrigger>
</template>
