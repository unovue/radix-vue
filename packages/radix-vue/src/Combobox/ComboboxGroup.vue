<script lang="ts">
import { createContext, useId } from '@/shared'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

export interface ComboboxGroupProps extends PrimitiveProps {}

type ComboboxGroupContext = {
  id: string
  options?: Ref<Array<string | object>>
}

export const [injectComboboxGroupContext, provideComboboxGroupContext]
  = createContext<ComboboxGroupContext>('ComboboxGroup')
</script>

<script setup lang="ts">
import { type Ref, computed, ref } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = defineProps<ComboboxGroupProps>()

const id = useId()
const options = ref<Array<string | object>>([])

const rootContext = injectComboboxRootContext()
const isAnyChildInFilteredOptions = computed(() =>
  !rootContext.isUserInputted.value
   || options.value.length === 0
   || rootContext.filteredOptions.value.map(i => JSON.stringify(i)).some(i => options.value.map(i => JSON.stringify(i)).includes(i)))

provideComboboxGroupContext({
  id,
  options,
})
</script>

<template>
  <Primitive v-show="isAnyChildInFilteredOptions" role="group" v-bind="props" :aria-labelledby="id">
    <slot />
  </Primitive>
</template>
