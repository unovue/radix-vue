<script lang="ts">
export interface ComboboxVirtualizerProps<T extends AcceptableValue = AcceptableValue> extends ListboxVirtualizerProps<T> {}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import type { ListboxVirtualizerProps } from '@/Listbox'
import { ListboxVirtualizer } from '@/Listbox'
import type { AcceptableValue } from '@/shared/types'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

const props = defineProps<ComboboxVirtualizerProps<T>>()

defineSlots<{
  default: (props: {
    option: T
  }) => any
}>()

const rootContext = injectComboboxRootContext()
// set virtual true when this component mounted
rootContext.isVirtual.value = true
</script>

<template>
  <ListboxVirtualizer
    v-slot="{ option }"
    v-bind="props"
  >
    <slot :option="option" />
  </ListboxVirtualizer>
</template>
