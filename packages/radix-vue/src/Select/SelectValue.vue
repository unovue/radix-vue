<script setup lang="ts">
import { onMounted, useSlots } from 'vue'
import { shouldShowPlaceholder } from './utils'
import { injectSelectContext } from './SelectRoot.vue'
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

const context = injectSelectContext()

onMounted(() => {
  context.valueElement = currentElement
  const hasChildren = !!useSlots()?.default?.()
  context.onValueElementHasChildrenChange(hasChildren)
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :as="as"
    :as-child="asChild"
    :style="{ pointerEvents: 'none' }"
  >
    <template v-if="shouldShowPlaceholder(context.modelValue?.value)">
      {{ placeholder }}
    </template>
    <template v-else>
      <slot>{{ context.modelValue?.value }}</slot>
    </template>
  </Primitive>
</template>
