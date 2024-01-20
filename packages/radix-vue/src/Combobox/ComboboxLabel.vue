<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxLabelProps extends PrimitiveProps {
  for?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardRef } from '@/shared'
import { injectComboboxGroupContext } from './ComboboxGroup.vue'

const props = withDefaults(defineProps<ComboboxLabelProps>(), {
  as: 'div',
})

const { forwardRef } = useForwardRef()
const groupContext = injectComboboxGroupContext({ id: '' })
</script>

<template>
  <Primitive v-bind="props" :id="groupContext.id" :ref="forwardRef">
    <slot />
  </Primitive>
</template>
