<script setup lang="ts">
interface AccordionContentProps extends PrimitiveProps {}

import type { PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import {
  ACCORDION_ITEM_INJECTION_KEY,
  type AccordionItemProvideValue,
} from "./AccordionItem.vue";
import {
  ACCORDION_INJECTION_KEY,
  type AccordionProvideValue,
} from "./AccordionRoot.vue";

const injectedRoot = inject<AccordionProvideValue>(ACCORDION_INJECTION_KEY);
const injectedItem = inject<AccordionItemProvideValue>(
  ACCORDION_ITEM_INJECTION_KEY
);

const props = defineProps<AccordionContentProps>();
</script>

<template>
  <PrimitiveDiv
    role="region"
    :id="injectedItem?.triggerId"
    :hidden="!injectedItem?.open"
    :as-child="props.asChild"
    :aria-labelledby="injectedItem?.triggerId"
    :data-state="injectedItem?.dataState.value"
    :data-disabled="injectedItem?.dataDisabled.value"
    :data-orientation="injectedRoot?.orientation"
    :style="`
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    `"
  >
    <slot />
  </PrimitiveDiv>
</template>
