<script lang="ts">
import { type ComputedRef, type Ref, computed, ref, toRefs, watch } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useDirection, useForwardRef } from '@/shared'
import type { Direction } from '@/shared/types'

export type PinInputRootEmits = {
  'update:modelValue': [value: string[]]
  'complete': [value: string[]]
}

export interface PinInputRootProps extends PrimitiveProps {
  modelValue?: string[]
  defaultValue?: string[]
  placeholder?: string
  mask?: boolean
  otp?: boolean
  type?: 'text' | 'number'
  dir?: Direction
  name?: string
  disabled?: boolean
  required?: boolean
  id?: string
}

export interface PinInputRootContext {
  modelValue: Ref<string[]>
  mask: Ref<boolean>
  otp: Ref<boolean>
  placeholder: Ref<string>
  type: Ref<PinInputRootProps['type']>
  dir: Ref<Direction>
  disabled: Ref<boolean>
  isCompleted: ComputedRef<boolean>
  inputElements?: Ref<Set<HTMLInputElement>>
  onInputElementChange: (el: HTMLInputElement) => void
}

export const [injectPinInputRootContext, providePinInputRootContext]
  = createContext<PinInputRootContext>('PinInputRoot')
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PinInputRootProps>(), {
  placeholder: '',
  type: 'text',
})
const emits = defineEmits<PinInputRootEmits>()
const { mask, otp, placeholder, type, disabled, dir: propDir } = toRefs(props)
const { forwardRef } = useForwardRef()
const dir = useDirection(propDir)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? [],
  passive: (props.modelValue === undefined) as false,
}) as Ref<string[]>

const inputElements = ref<Set<HTMLInputElement>>(new Set())
function onInputElementChange(el: HTMLInputElement) {
  inputElements.value.add(el)
}

const isCompleted = computed(() => {
  const modelValues = modelValue.value.filter(i => !!i)
  return modelValues.length === inputElements.value.size
})

watch(modelValue, () => {
  if (isCompleted.value)
    emits('complete', modelValue.value)
}, { deep: true })

providePinInputRootContext({
  modelValue,
  mask,
  otp,
  placeholder,
  type,
  dir,
  disabled,
  isCompleted,
  inputElements,
  onInputElementChange,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :ref="forwardRef"
    :dir="dir"
    :data-complete="isCompleted ? '' : undefined"
    :data-disabled="disabled ? '' : undefined"
  >
    <slot :model-value="modelValue" />
  </Primitive>

  <input
    :id="id"
    type="text"
    tabindex="-1"
    aria-hidden
    :value="modelValue.join('')"
    :name="name"
    :disabled="disabled"
    :required="required"
    :style="{
      transform: 'translateX(-100%)',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
    @focus="Array.from(inputElements)?.[0]?.focus()"
  >
</template>
