<script setup lang="ts">
import { injectAccordionItemContext } from './AccordionItem.vue'
import { injectAccordionRootContext } from './AccordionRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface AccordionHeaderProps extends PrimitiveProps {}

const props = withDefaults(defineProps<AccordionHeaderProps>(), {
  as: 'h3',
})

const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :data-orientation="rootContext.orientation"
    :data-state="itemContext.dataState.value"
    :data-disabled="itemContext.dataDisabled.value"
  >
    <slot />
  </Primitive>
</template>
