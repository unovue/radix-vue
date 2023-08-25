<script setup lang="ts">
import { inject } from 'vue'
import { ACCORDION_ITEM_INJECTION_KEY } from './AccordionItem.vue'
import { ACCORDION_INJECTION_KEY } from './AccordionRoot.vue'
import { type PrimitiveProps } from '@/Primitive'
import { CollapsibleTrigger } from '@/Collapsible'

export interface AccordionTriggerProps extends PrimitiveProps {}

const props = defineProps<AccordionTriggerProps>()

const injectedRoot = inject(ACCORDION_INJECTION_KEY)
const injectedItem = inject(ACCORDION_ITEM_INJECTION_KEY)

function changeItem() {
  if (injectedItem?.disabled.value)
    return
  injectedItem && injectedRoot?.changeModelValue(injectedItem.value.value)
}
</script>

<template>
  <CollapsibleTrigger
    :id="injectedItem?.triggerId"
    :ref="injectedItem?.primitiveElement"
    data-radix-vue-collection-item
    :as="props.as"
    :as-child="props.asChild"
    :aria-controls="injectedItem?.triggerId"
    :aria-disabled="injectedItem?.disabled.value || undefined"
    :aria-expanded="injectedItem?.open.value || false"
    :data-disabled="injectedItem?.dataDisabled.value"
    :data-orientation="injectedRoot?.orientation"
    :data-state="injectedItem?.dataState.value"
    :disabled="injectedItem?.disabled?.value"
    @click="changeItem"
  >
    <slot />
  </CollapsibleTrigger>
</template>
