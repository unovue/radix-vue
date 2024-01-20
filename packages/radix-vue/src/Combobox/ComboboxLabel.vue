<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxLabelProps extends PrimitiveProps {
  for?: string
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardExpose } from '@/shared'
import { injectComboboxGroupContext } from './ComboboxGroup.vue'

const props = withDefaults(defineProps<ComboboxLabelProps>(), {
  as: 'div',
})

useForwardExpose()
const groupContext = injectComboboxGroupContext({ id: '' })
</script>

<template>
  <Primitive v-bind="props" :id="groupContext.id">
    <slot />
  </Primitive>
</template>
