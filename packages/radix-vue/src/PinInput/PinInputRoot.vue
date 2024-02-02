<script lang="ts">
import { type ComputedRef, type Ref, computed, ref, toRefs, watch } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useDirection, useForwardExpose } from '@/shared'
import type { Direction } from '@/shared/types'

export type PinInputRootEmits = {
  'update:modelValue': [value: string[]]
  'complete': [value: string[]]
}

export interface PinInputRootProps extends PrimitiveProps {
  /** The controlled checked state of the pin input. Can be binded as `v-model`. */
  modelValue?: string[]
  /** The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state. */
  defaultValue?: string[]
  /** The placeholder character to use for empty pin-inputs. */
  placeholder?: string
  /** When `true`, pin inputs will be treated as password. */
  mask?: boolean
  /** When `true`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field. */
  otp?: boolean
  /** Input type for the inputs. */
  type?: 'text' | 'number'
  /** The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** The name of the pin input. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** When `true`, prevents the user from interacting with the pin input */
  disabled?: boolean
  /** When `true`, indicates that the user must check the pin input before the owning form can be submitted. */
  required?: boolean
  /** Id of the element */
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

defineSlots<{
  default(props: {
    /** Current input values */
    modelValue: typeof modelValue.value
  }): any
}>()

const { mask, otp, placeholder, type, disabled, dir: propDir } = toRefs(props)
const { forwardRef } = useForwardExpose()
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
