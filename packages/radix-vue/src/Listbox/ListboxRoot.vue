<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext } from '@/shared'

type ListboxRootContext<T> = {
  modelValue: Ref<T | Array<T> | undefined>
  onValueChange: (val: T) => void
  multiple: Ref<boolean>
  disabled: Ref<boolean>
}

export const [injectListboxRootContext, provideListboxRootContext]
  = createContext<ListboxRootContext<AcceptableValue>>('ListboxRoot')

export interface ListboxRootProps<T = AcceptableValue> extends PrimitiveProps {
  /** The controlled value of the listbox. Can be binded-with with `v-model`. */
  modelValue?: T | Array<T>
  /** The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox */
  defaultValue?: T | Array<T>
  /** Whether multiple options can be selected or not. */
  multiple?: boolean
  /** When `true`, prevents the user from interacting with listbox */
  disabled?: boolean
  selectionBehavior?: 'toggle' | 'replace'
}

export type ListboxRootEmits<T = AcceptableValue> = {
  /** Event handler called when the value changes. */
  'update:modelValue': [value: T]
}
</script>

<script setup lang="ts" generic="T extends AcceptableValue = AcceptableValue">
import { RovingFocusGroup } from '@/RovingFocus'
import { useVModel } from '@vueuse/core'
import type { AcceptableValue } from './utils'
import { type Ref, toRefs } from 'vue'
import isEqual from 'fast-deep-equal'

const props = withDefaults(defineProps<ListboxRootProps>(), {
  selectionBehavior: 'toggle',
})
const emits = defineEmits<ListboxRootEmits>()

const { multiple, disabled } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue ?? multiple.value ? [] : undefined,
  passive: (props.modelValue === undefined) as false,
  deep: true,
}) as Ref<T | T[] | undefined>

provideListboxRootContext({
  modelValue,
  // @ts-expect-error igoring
  onValueChange(val: T) {
    if (Array.isArray(modelValue.value)) {
      const index = modelValue.value.findIndex(i => isEqual(i, val))
      index === -1 ? modelValue.value.push(val) : modelValue.value.splice(index, 1)
      // TODO: add replace behavior for multiple
    }
    else {
      if (props.selectionBehavior === 'toggle') {
        if (isEqual(modelValue.value, val))
          modelValue.value = undefined
        else
          modelValue.value = val
      }
      else {
        modelValue.value = val
      }
    }
  },
  multiple,
  disabled,
})
</script>

<template>
  <RovingFocusGroup
    role="listbox"
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </RovingFocusGroup>
</template>
