<script setup lang="ts">
import { CollapsibleContent } from '../Collapsible'
import { injectAccordionItemContext } from './AccordionItem.vue'
import { injectAccordionContext } from './AccordionRoot.vue'
import type { PrimitiveProps } from '@/Primitive'

export interface AccordionContentProps extends PrimitiveProps {}

const props = defineProps<AccordionContentProps>()

const context = injectAccordionContext()
const injectedItem = injectAccordionItemContext()
</script>

<template>
  <CollapsibleContent
    :id="injectedItem.triggerId"
    role="region"
    :open="injectedItem.open.value"
    :hidden="!injectedItem.open.value"
    :as-child="props.asChild"
    :aria-labelledby="injectedItem.triggerId"
    :data-state="injectedItem.dataState.value"
    :data-disabled="injectedItem.dataDisabled.value"
    :data-orientation="context.orientation"
    style="
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    "
  >
    <slot />
  </CollapsibleContent>
</template>
