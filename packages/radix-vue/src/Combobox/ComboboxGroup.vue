<script lang="ts">
export interface ComboboxGroupProps extends PrimitiveProps {}

interface SelectGroupContextValue {
  id: string
  options?: Ref<string[]>
}
export const COMBOBOX_GROUP_INJECTION_KEY
  = Symbol() as InjectionKey<SelectGroupContextValue>
</script>

<script setup lang="ts">
import { type InjectionKey, type Ref, computed, inject, provide, ref } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { useId } from '@/shared'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

const props = defineProps<ComboboxGroupProps>()

const id = useId()
const options = ref<string[]>([])
provide(COMBOBOX_GROUP_INJECTION_KEY, {
  id,
  options,
})

const context = inject(COMBOBOX_INJECT_KEY)
const isAnyChildInFilteredOptions = computed(() => !context?.isUserInputted.value || context?.filteredOptions.value.some(i => options.value.includes(i)))
</script>

<template>
  <Primitive v-if="isAnyChildInFilteredOptions" role="group" v-bind="props" :aria-labelledby="id">
    <slot />
  </Primitive>
</template>
