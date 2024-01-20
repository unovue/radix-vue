<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AccordionContentProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { useForwardRef } from '@/shared'
import { CollapsibleContent } from '../Collapsible'
import { injectAccordionItemContext } from './AccordionItem.vue'
import { injectAccordionRootContext } from './AccordionRoot.vue'

const props = defineProps<AccordionContentProps>()

const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()

const { forwardRef } = useForwardRef()
</script>

<template>
  <CollapsibleContent
    :id="itemContext.triggerId"
    :ref="forwardRef"
    role="region"
    :open="itemContext.open.value"
    :hidden="!itemContext.open.value"
    :as-child="props.asChild"
    :aria-labelledby="itemContext.triggerId"
    :data-state="itemContext.dataState.value"
    :data-disabled="itemContext.dataDisabled.value"
    :data-orientation="rootContext.orientation"
    style="
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    "
  >
    <slot />
  </CollapsibleContent>
</template>
