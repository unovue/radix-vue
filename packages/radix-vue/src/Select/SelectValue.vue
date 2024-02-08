<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SelectValueProps extends PrimitiveProps {
  /** The content that will be rendered inside the `SelectValue` when no `value` or `defaultValue` is set. */
  placeholder?: string
}
</script>

<script setup lang="ts">
import { onBeforeMount, onMounted, useSlots } from 'vue'
import { shouldShowPlaceholder } from './utils'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Primitive } from '@/Primitive'
import { renderSlotFragments, useForwardExpose } from '@/shared'

withDefaults(defineProps<SelectValueProps>(), {
  as: 'span',
  placeholder: '',
})

const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectSelectRootContext()
const slots = useSlots()

onBeforeMount(() => {
  const hasChildren = !!renderSlotFragments(slots?.default?.()).length
  rootContext.onValueElementHasChildrenChange(hasChildren)
})

onMounted(() => {
  rootContext.valueElement = currentElement
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :style="{ pointerEvents: 'none' }"
  >
    <template v-if="shouldShowPlaceholder(rootContext.modelValue?.value)">
      {{ placeholder }}
    </template>

    <template v-else>
      <slot />
    </template>
  </Primitive>
</template>
