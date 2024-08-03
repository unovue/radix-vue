<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SelectValueProps extends PrimitiveProps {
  /** The content that will be rendered inside the `SelectValue` when no `value` or `defaultValue` is set. */
  placeholder?: string
}
</script>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Primitive } from '@/Primitive'
import { useForwardExpose } from '@/shared'

const props = withDefaults(defineProps<SelectValueProps>(), {
  as: 'span',
  placeholder: '',
})

const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectSelectRootContext()

onMounted(() => {
  rootContext.valueElement = currentElement
})

const slotText = computed(() => {
  if (Array.isArray(rootContext.modelValue.value))
    return rootContext.modelValue.value.length === 0 ? props.placeholder : rootContext.modelValue.value.join(', ')
  else
    return rootContext.modelValue.value || props.placeholder
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :style="{ pointerEvents: 'none' }"
  >
    <slot>{{ slotText }}</slot>
  </Primitive>
</template>
