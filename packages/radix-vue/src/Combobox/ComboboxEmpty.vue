<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed, inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxEmptyProps extends PrimitiveProps {}
const props = defineProps<ComboboxEmptyProps>()

const context = inject(COMBOBOX_INJECT_KEY)
// if no options, then show this
const isEmpty = computed(() => context?.searchTerm.value && context.filteredOptions.value.length === 0)
</script>

<template>
  <Primitive
    v-if="isEmpty"
    v-bind="props"
  >
    <slot>No options</slot>
  </Primitive>
</template>
