<script lang="ts">
import type { Ref } from 'vue'
import type { ListboxItemEmits, ListboxItemProps } from '@/Listbox'
import { createContext, useForwardExpose } from '@/shared'
import { type AcceptableValue, injectComboboxRootContext } from './ComboboxRoot.vue'

export type SelectEvent<T> = CustomEvent<{ originalEvent: PointerEvent, value?: T }>
interface ComboboxItemContext {
  isSelected: Ref<boolean>
}

export const [injectComboboxItemContext, provideComboboxItemContext]
  = createContext<ComboboxItemContext>('ComboboxItem')

export type ComboboxItemEmits<T = AcceptableValue> = ListboxItemEmits<T>
export interface ComboboxItemProps<T = AcceptableValue> extends ListboxItemProps<T> { }
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { ListboxItem } from '@/Listbox'

const props = defineProps<ComboboxItemProps<T>>()
const emits = defineEmits<ComboboxItemEmits<T>>()

const { forwardRef } = useForwardExpose()
const rootContext = injectComboboxRootContext()

if (props.value === '') {
  throw new Error(
    'A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.',
  )
}
</script>

<template>
  <ListboxItem
    :ref="forwardRef"
    v-bind="props"
    @select="(event) => {
      emits('select', event as any)
      if (event.defaultPrevented)
        return

      if (!rootContext.multiple.value) {
        event.preventDefault()
        rootContext.onOpenChange(false)
        rootContext.modelValue.value = props.value
      }
    }"
  >
    <slot>{{ value }}</slot>
  </ListboxItem>
</template>
