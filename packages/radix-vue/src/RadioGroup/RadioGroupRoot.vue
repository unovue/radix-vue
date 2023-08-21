<script lang="ts">
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import type { DataOrientation, Direction } from '@/shared/types'
import { useVModel } from '@vueuse/core'
import type { InjectionKey, Ref } from 'vue'

export interface RadioGroupRootProps extends PrimitiveProps {
  modelValue?: string | string[]
  onValueChange?: (value: string) => void
  defaultValue?: string
  value?: string
  disabled?: boolean
  name?: string
  required?: boolean
  orientation?: DataOrientation
  dir?: Direction
  loop?: boolean
}
export interface RadioGroupRootEmits {
  (e: 'update:modelValue', payload: string | string[]): void
}

interface RadioGroupProvideValue {
  modelValue?: Readonly<Ref<string | string[] | undefined>>
  changeModelValue: (value?: string) => void
  parentElement: Ref<HTMLElement | undefined>
  currentFocusedElement?: Ref<HTMLElement | undefined>
  disabled: Ref<boolean>
  loop: Ref<boolean>
  orientation: Ref<DataOrientation | undefined>
  name?: string
  required: Ref<boolean>
}

export const RADIO_GROUP_INJECTION_KEY
  = Symbol() as InjectionKey<RadioGroupProvideValue>
</script>

<script setup lang="ts">
import { provide, ref } from 'vue'

const props = withDefaults(defineProps<RadioGroupRootProps>(), {
  disabled: false,
  required: false,
  orientation: undefined,
  dir: 'ltr',
  loop: true,
})

const emits = defineEmits<RadioGroupRootEmits>()

const { primitiveElement, currentElement: parentElement }
  = usePrimitiveElement()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})

provide<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY, {
  modelValue,
  changeModelValue: (value?: string) => {
    modelValue.value = value
    if (value && props.onValueChange)
      props.onValueChange(value)
  },
  parentElement,
  currentFocusedElement: ref(),
  disabled: ref(props.disabled),
  loop: ref(props.loop),
  orientation: ref(props.orientation),
  name: props.name,
  required: ref(props.required),
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    role="radiogroup"
    :data-disabled="props.disabled ? '' : undefined"
    :as-child="props.asChild"
    :as="as"
    :required="props.required"
    :aria-required="props.required"
    :dir="props.dir"
    :name="props.name"
  >
    <slot />
  </Primitive>
</template>
