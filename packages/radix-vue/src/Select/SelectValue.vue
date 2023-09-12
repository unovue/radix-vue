<script setup lang="ts">
import { inject, onBeforeMount, onMounted, useSlots } from 'vue'
import { shouldShowPlaceholder } from './utils'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { renderSlotFragments } from '@/shared'

export interface SelectValueProps extends PrimitiveProps {
  placeholder?: string
}

withDefaults(defineProps<SelectValueProps>(), {
  as: 'span',
  placeholder: '',
})

const { primitiveElement, currentElement } = usePrimitiveElement()

const context = inject(SELECT_INJECTION_KEY)
const slots = useSlots()

onBeforeMount(() => {
  const hasChildren = !!renderSlotFragments(slots?.default?.()).length
  context!.onValueElementHasChildrenChange(hasChildren)
})

onMounted(() => {
  context!.valueElement = currentElement
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as="as"
    :as-child="asChild"
    :style="{ pointerEvents: 'none' }"
  >
    <template v-if="shouldShowPlaceholder(context?.modelValue?.value)">
      {{ placeholder }}
    </template>

    <template v-else>
      <slot />
    </template>
  </Primitive>
</template>
