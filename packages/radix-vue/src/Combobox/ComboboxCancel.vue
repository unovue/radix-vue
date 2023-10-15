<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

export interface ComboboxCancelProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ComboboxCancelProps>(), {
  as: 'button',
})

const rootContext = injectComboboxRootContext()

function handleClick() {
  rootContext.searchTerm.value = ''
  rootContext.inputElement.value?.focus()
}
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    v-bind="props"
    tabindex="-1"
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
