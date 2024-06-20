<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SelectValueProps extends PrimitiveProps {
  /** The content that will be rendered inside the `SelectValue` when no `value` or `defaultValue` is set. */
  placeholder?: string
}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Primitive } from '@/Primitive'
import { useForwardExpose } from '@/shared'

withDefaults(defineProps<SelectValueProps>(), {
  as: 'span',
  placeholder: '',
})

const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectSelectRootContext()

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
    <slot>{{ rootContext.modelValue?.value || placeholder }}</slot>
  </Primitive>
</template>
