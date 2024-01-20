<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AccordionHeaderProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { useForwardRef } from '@/shared'
import { injectAccordionItemContext } from './AccordionItem.vue'
import { injectAccordionRootContext } from './AccordionRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<AccordionHeaderProps>(), {
  as: 'h3',
})

const rootContext = injectAccordionRootContext()
const itemContext = injectAccordionItemContext()

const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="props.as"
    :as-child="props.asChild"
    :data-orientation="rootContext.orientation"
    :data-state="itemContext.dataState.value"
    :data-disabled="itemContext.dataDisabled.value"
  >
    <slot />
  </Primitive>
</template>
