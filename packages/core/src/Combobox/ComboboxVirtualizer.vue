<script lang="ts">
export interface ComboboxVirtualizerProps<T extends AcceptableValue = AcceptableValue> extends ListboxVirtualizerProps<T> {}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import ListboxVirtualizer, { type ListboxVirtualizerProps, type ListboxVirtualizerSlots } from '@/Listbox/ListboxVirtualizer.vue'
import type { AcceptableValue } from '@/shared/types'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

const props = defineProps<ComboboxVirtualizerProps<T>>()

defineSlots<{
  default: (props: ListboxVirtualizerSlots<T>) => any
}>()

const rootContext = injectComboboxRootContext()
// set virtual true when this component mounted
rootContext.isVirtual.value = true
</script>

<template>
  <ListboxVirtualizer
    v-slot="slotProps"
    v-bind="props"
  >
    <slot v-bind="slotProps" />
  </ListboxVirtualizer>
</template>
