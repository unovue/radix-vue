<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxEmptyProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { computed } from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

const props = defineProps<ComboboxEmptyProps>()

const rootContext = injectComboboxRootContext()
// if no options, then show this
const isEmpty = computed(() => rootContext.searchTerm.value && rootContext.filteredOptions.value.length === 0)
</script>

<template>
  <Primitive
    v-if="isEmpty"
    v-bind="props"
  >
    <slot>No options</slot>
  </Primitive>
</template>
