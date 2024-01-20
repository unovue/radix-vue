<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useForwardExpose, useId } from '@/shared'
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import type { AcceptableValue } from './ComboboxRoot.vue'

export interface ComboboxGroupProps extends PrimitiveProps {}

type ComboboxGroupContext = {
  id: string
  options?: Ref<Array<AcceptableValue>>
}

export const [injectComboboxGroupContext, provideComboboxGroupContext]
  = createContext<ComboboxGroupContext>('ComboboxGroup')
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Primitive } from '@/Primitive'

const props = defineProps<ComboboxGroupProps>()

useForwardExpose()
const id = useId()
const options = ref<Array<AcceptableValue>>([])

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
  <Primitive
    v-show="isAnyChildInFilteredOptions"
    v-bind="props"
    role="group"
    :aria-labelledby="id"
  >
    <slot />
  </Primitive>
</template>
