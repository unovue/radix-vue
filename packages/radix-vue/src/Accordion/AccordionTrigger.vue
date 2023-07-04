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

const accordionImplInjectedValue = inject<AccordionImplProvideValue>(
  ACCORDION_IMPL_INJECTION_KEY
);
const accordionItemInjectedValue = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);
const accordionCollapsibleInjectedValue =
  inject<AccordionCollapsibleProvideValue>(ACCORDION_COLLAPSIBLE_INJECTION_KEY);
</script>

<template>
  <CollapsibleTrigger
    data-radix-vue-collection-item
    :aria-disabled="
      (accordionItemInjectedValue?.open &&
        !accordionCollapsibleInjectedValue?.collapsible) ||
      undefined
    "
    :data-orientation="accordionImplInjectedValue?.orientation"
    :id="accordionItemInjectedValue?.triggerId"
  >
    <slot />
  </CollapsibleTrigger>
</template>
