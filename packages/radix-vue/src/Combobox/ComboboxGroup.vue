<script lang="ts">
import type { ListboxGroupProps } from '@/Listbox'
import { createContext, useId } from '@/shared'

export interface ComboboxGroupProps extends ListboxGroupProps {}

type ComboboxGroupContext = {
  id: string
}

export const [injectComboboxGroupContext, provideComboboxGroupContext]
  = createContext<ComboboxGroupContext>('ComboboxGroup')
</script>

<script setup lang="ts">
import { ListboxGroup } from '@/Listbox'

const props = defineProps<ComboboxGroupProps>()
const id = useId(undefined, 'radix-vue-combobox-group')

provideComboboxGroupContext({
  id,
})
</script>

<template>
  <ListboxGroup
    :id="id"
    :aria-labelledby="id"
    v-bind="props"
  >
    <slot />
  </ListboxGroup>
</template>
