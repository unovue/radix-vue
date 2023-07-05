<script setup lang="ts">
import { inject } from "vue";
import { CollapsibleContent } from "../Collapsible";
import {
  ACCORDION_IMPL_INJECTION_KEY,
  type AccordionImplProvideValue,
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
</script>

<template>
  <CollapsibleContent
    role="region"
    :aria-labelledby="accordionItemInjectedValue?.triggerId"
    :data-orientation="accordionImplInjectedValue?.orientation"
    :style="{
      ['--radix-accordion-content-height' as any]: 'var(--radix-collapsible-content-height)',
      ['--radix-accordion-content-width' as any]: 'var(--radix-collapsible-content-width)',
    }"
  >
    <slot />
  </CollapsibleContent>
</template>
