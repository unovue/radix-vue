<script lang="ts">
import { useVModel } from '@vueuse/core'
import { Primitive, type PrimitiveProps } from '..'
import { injectListboxRootContext } from './ListboxRoot.vue'

export interface ListboxFilterProps extends PrimitiveProps {
  modelValue?: string
}

export type ListboxFilterEmits = {
  'update:modelValue': [string]
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<ListboxFilterProps>(), {
  as: 'input',
})
const emits = defineEmits<ListboxFilterEmits>()
const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: '',
  passive: (props.modelValue === undefined) as false,
})

const rootContext = injectListboxRootContext()
rootContext.focusable.value = false
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :value="modelValue"
    @focus="rootContext.onEnter"
    @keydown.down.up.home.end.prevent="rootContext.onKeydownNavigation"
    @keydown.enter="rootContext.onKeydownEnter"
    @input="(event: InputEvent) => {
      modelValue = (event.target as HTMLInputElement).value
    }"
  >
    <slot />
  </Primitive>
</template>
