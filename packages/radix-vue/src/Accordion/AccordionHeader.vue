<script setup lang="ts">
import { injectAccordionItemContext } from './AccordionItem.vue'
import { injectAccordionRootContext } from './AccordionRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface AccordionHeaderProps extends PrimitiveProps {}

const props = defineProps<AccordionHeaderProps>()

const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()
</script>

<template>
  <Primitive
    :as="props.as || 'h3'"
    :as-child="props.asChild"
    :data-orientation="rootContext.orientation"
    :data-state="itemContext.dataState.value"
    :data-disabled="itemContext.dataDisabled.value"
  >
    <slot />
  </Primitive>
</template>
