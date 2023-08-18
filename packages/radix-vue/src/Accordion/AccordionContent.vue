<script setup lang="ts">
import type { PrimitiveProps } from "@/Primitive";
import { inject } from "vue";
import { CollapsibleContent } from "../Collapsible";
import { ACCORDION_ITEM_INJECTION_KEY } from "./AccordionItem.vue";
import { ACCORDION_INJECTION_KEY } from "./AccordionRoot.vue";

export interface AccordionContentProps extends PrimitiveProps {}

const props = defineProps<AccordionContentProps>();

const injectedRoot = inject(ACCORDION_INJECTION_KEY);
const injectedItem = inject(ACCORDION_ITEM_INJECTION_KEY);
</script>

<template>
  <CollapsibleContent
    role="region"
    :id="injectedItem?.triggerId"
    :open="injectedItem?.open.value"
    :hidden="!injectedItem?.open.value"
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
