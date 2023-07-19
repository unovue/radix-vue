<script setup lang="ts">
import { inject } from "vue";
import { CollapsibleContent } from "../Collapsible";
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

const props = withDefaults(defineProps<{ asChild?: boolean }>(), {
  asChild: false,
});
</script>

<template>
  <CollapsibleContent
    role="region"
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
  </CollapsibleContent>
</template>
