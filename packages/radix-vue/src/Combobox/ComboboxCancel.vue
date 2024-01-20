<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxCancelProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardRef } from '@/shared'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

const props = withDefaults(defineProps<ComboboxCancelProps>(), {
  as: 'button',
})

const { forwardRef } = useForwardRef()
const rootContext = injectComboboxRootContext()

function handleClick() {
  rootContext.searchTerm.value = ''
  rootContext.inputElement.value?.focus()
}
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :type="as === 'button' ? 'button' : undefined"
    v-bind="props"
    tabindex="-1"
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
