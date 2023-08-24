<script setup lang="ts">
import { inject } from 'vue'
import { ACCORDION_ITEM_INJECTION_KEY } from './AccordionItem.vue'
import { ACCORDION_INJECTION_KEY } from './AccordionRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface AccordionHeaderProps extends PrimitiveProps {}

const props = defineProps<AccordionHeaderProps>()

const injectedRoot = inject(ACCORDION_INJECTION_KEY)
const injectedItem = inject(ACCORDION_ITEM_INJECTION_KEY)
</script>

<template>
  <Primitive
    :as="props.as || 'h3'"
    :as-child="props.asChild"
    :data-orientation="injectedRoot?.orientation"
    :data-state="injectedItem?.dataState.value"
    :data-disabled="injectedItem?.dataDisabled.value"
  >
    <slot />
  </Primitive>
</template>
