<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxCancelProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ComboboxCancelProps>(), {
  as: 'button',
})

const context = inject(COMBOBOX_INJECT_KEY)

function handleClick() {
  context!.searchTerm.value = ''
  context?.inputElement.value?.focus()
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
