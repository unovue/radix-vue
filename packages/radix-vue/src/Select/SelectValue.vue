<script setup lang="ts">
import { h, inject, onMounted, useSlots } from 'vue'
import { shouldShowPlaceholder } from './utils'
import { SELECT_INJECTION_KEY } from './SelectRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

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

onMounted(() => {
  context!.valueElement = currentElement
  const hasChildren = !!slots?.default?.()
  context!.onValueElementHasChildrenChange(hasChildren)
})

const ValueRenderer = () => h(() => context?.valueRenderer?.value)
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
    <template v-else-if="context?.valueRenderer?.value">
      <slot>
        <ValueRenderer />
      </slot>
    </template>
    <template v-else>
      <slot />
    </template>
  </Primitive>
</template>
