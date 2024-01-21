<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction } from '@/shared/types'
import { createContext, useDirection, useForwardExpose } from '@/shared'

export interface RadioGroupRootProps extends PrimitiveProps {
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  name?: string
  required?: boolean
  orientation?: DataOrientation
  dir?: Direction
  loop?: boolean
}
export type RadioGroupRootEmits = {
  'update:modelValue': [payload: string]
}

interface RadioGroupRootContext {
  modelValue?: Readonly<Ref<string | undefined>>
  changeModelValue: (value?: string) => void
  disabled: Ref<boolean>
  loop: Ref<boolean>
  orientation: Ref<DataOrientation | undefined>
  name?: string
  required: Ref<boolean>
}

export const [injectRadioGroupRootContext, provideRadioGroupRootContext]
  = createContext<RadioGroupRootContext>('RadioGroupRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<RadioGroupRootProps>(), {
  disabled: false,
  required: false,
  orientation: undefined,
  loop: true,
})

const emits = defineEmits<RadioGroupRootEmits>()

const { forwardRef } = useForwardExpose()
const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
})

const { disabled, loop, orientation, name, required, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
provideRadioGroupRootContext({
  modelValue,
  changeModelValue: (value) => {
    modelValue.value = value
  },
  disabled,
  loop,
  orientation,
  name: name?.value,
  required,
})
</script>

<template>
  <RovingFocusGroup as-child :orientation="orientation" :dir="dir" :loop="loop">
    <Primitive
      :ref="forwardRef"
      role="radiogroup"
      :data-disabled="disabled ? '' : undefined"
      :as-child="asChild"
      :as="as"
      :required="required"
      :aria-orientation="orientation"
      :aria-required="required"
      :dir="dir"
      :name="name"
    >
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
