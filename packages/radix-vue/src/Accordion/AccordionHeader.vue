<script setup lang="ts">
import { inject } from "vue";
import { PrimitiveH3 } from "@/Primitive";
import { type PrimitiveProps } from "@/Primitive";

interface AccordionHeaderProps extends PrimitiveProps {}
const props = defineProps<AccordionHeaderProps>();

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
  <PrimitiveH3
    :data-orientation="accordionImplInjectedValue?.orientation"
    :data-state="accordionItemInjectedValue?.open ? 'open' : 'closed'"
    :data-disabled="accordionItemInjectedValue?.disabled ? '' : undefined"
    :as-child="props.asChild"
  >
    <slot />
  </PrimitiveH3>
</template>
