<script lang="ts">
import { type Ref, toRefs } from 'vue'
import { createContext, useDirection, useFormControl } from '@/shared'
import type { RovingFocusGroupProps } from '@/RovingFocus'
import type { AcceptableValue } from '@/shared/types'
import { useVModel } from '@vueuse/core'
import { usePrimitiveElement } from '@/Primitive'

export interface CheckboxGroupRootProps<T = AcceptableValue> extends Pick<RovingFocusGroupProps, 'as' | 'asChild' | 'dir' | 'orientation' | 'loop'> {
  /** The value of the checkbox when it is initially rendered. Use when you do not need to control its value. */
  defaultValue?: T[]
  /** The controlled value of the checkbox. Can be binded with v-model. */
  modelValue?: T[]
  /** When `true`, prevents the user from interacting with the checkboxes */
  disabled?: boolean
  /** When `true`, indicates that the user must check the checkbox before the owning form can be submitted. */
  required?: boolean
  /** The name of the checkbox. Submitted with its owning form as part of a name/value pair. */
  name?: string
}

export type CheckboxGroupRootEmits<T = AcceptableValue> = {
  /** Event handler called when the value of the checkbox changes. */
  'update:modelValue': [value: T[]]
}

interface CheckboxGroupRootContext {
  modelValue: Ref<AcceptableValue[]>
  disabled: Ref<boolean>
}

export const [injectCheckboxGroupRootContext, provideCheckboxGroupRootContext]
  = createContext<CheckboxGroupRootContext>('CheckboxGroupRoot')
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { RovingFocusGroup } from '@/RovingFocus'
import { VisuallyHiddenInput } from '@/VisuallyHidden'

const props = defineProps<CheckboxGroupRootProps<T>>()
const emits = defineEmits<CheckboxGroupRootEmits<T>>()

const { disabled, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

const { primitiveElement, currentElement } = usePrimitiveElement()
const isFormControl = useFormControl(currentElement)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? [],
  passive: (props.modelValue === undefined) as false,
}) as Ref<T[]>

provideCheckboxGroupRootContext({
  modelValue,
  disabled,
})
</script>

<template>
  <RovingFocusGroup
    ref="primitiveElement"
    :as="as"
    :as-child="asChild"
    :loop="loop"
    :dir="dir"
    :orientation="orientation"
  >
    <slot />

    <VisuallyHiddenInput
      v-if="isFormControl && name"
      :name="name"
      :value="modelValue"
      :required="required"
    />
  </RovingFocusGroup>
</template>
