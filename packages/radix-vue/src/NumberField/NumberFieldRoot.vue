<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useVModel } from '@vueuse/core'
import { type Ref, ref } from 'vue'
import { createContext } from '@/shared'

export interface NumberFieldRootProps extends PrimitiveProps {
  defaultValue?: number
  modelValue?: number
}

export type NumberFieldRootEmits = {
  'update:modelValue': [val: number]
}

interface NumberFieldRootContext {
  modelValue: Ref<number>
  handleIncrease: () => void
  handleDecrease: () => void
  inputEl: Ref<HTMLElement | undefined>
}

export const [injectNumberFieldRootContext, provideNumberFieldRootContext] = createContext<NumberFieldRootContext>('NumberFieldRoot')
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<NumberFieldRootProps>(), {
  as: 'div',
  defaultValue: 0,
})
const emits = defineEmits<NumberFieldRootEmits>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<number>

const inputEl = ref<HTMLElement>()

function handleIncrease() {
  modelValue.value++
}
function handleDecrease() {
  modelValue.value--
}

provideNumberFieldRootContext({
  modelValue,
  handleDecrease,
  handleIncrease,
  inputEl,
})
</script>

<template>
  <Primitive
    role="group"
    v-bind="props"
  >
    <slot />
  </Primitive>
</template>
