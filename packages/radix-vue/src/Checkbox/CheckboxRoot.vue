<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { Ref } from 'vue'
import { createContext, isValueEqualOrExist, useFormControl, useForwardExpose } from '@/shared'
import type { CheckedState } from './utils'
import type { AcceptableValue } from '@/shared/types'

export interface CheckboxRootProps extends PrimitiveProps {
  /** The value of the checkbox when it is initially rendered. Use when you do not need to control its value. */
  defaultValue?: AcceptableValue | AcceptableValue[] | 'indeterminate'
  /** The controlled value of the checkbox. Can be binded with v-model. */
  modelValue?: AcceptableValue | AcceptableValue[] | 'indeterminate'
  /** When `true`, prevents the user from interacting with the checkbox */
  disabled?: boolean
  /** When `true`, indicates that the user must check the checkbox before the owning form can be submitted. */
  required?: boolean
  /** The name of the checkbox. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /**
   * The value given as data when submitted with a `name`.
   *  @defaultValue "on"
   */
  value?: AcceptableValue
  /** Id of the element */
  id?: string
}

export type CheckboxRootEmits = {
  /** Event handler called when the value of the checkbox changes. */
  'update:modelValue': [value: AcceptableValue | AcceptableValue[]]
}

interface CheckboxRootContext {
  disabled: Ref<boolean>
  state: Ref<CheckedState>
}

export const [injectCheckboxRootContext, provideCheckboxRootContext]
  = createContext<CheckboxRootContext>('CheckboxRoot')
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { Primitive } from '@/Primitive'
import { getState, isIndeterminate } from './utils'
import { useSingleOrMultipleValue } from '@/shared/useSingleOrMultipleValue'
import { VisuallyHiddenInput } from '@/VisuallyHidden'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CheckboxRootProps>(), {
  defaultValue: undefined,
  value: 'on',
  as: 'button',
})
const emits = defineEmits<CheckboxRootEmits>()

defineSlots<{
  default: (props: {
    /** Current value */
    modelValue: typeof modelValue.value
    /** Current state */
    state: typeof checkboxState.value
  }) => any
}>()

const { disabled } = toRefs(props)
const { forwardRef, currentElement } = useForwardExpose()
const { modelValue, changeModelValue } = useSingleOrMultipleValue(props, emits)

const checkboxState = computed<CheckedState>(() => {
  if (typeof props.modelValue === 'string' && props.modelValue === 'indeterminate') {
    return 'indeterminate'
  }
  else {
    return isValueEqualOrExist(modelValue.value, props.value)
  }
})

const isFormControl = useFormControl(currentElement)
const ariaLabel = computed(() => props.id && currentElement.value
  ? (document.querySelector(`[for="${props.id}"]`) as HTMLLabelElement)?.innerText
  : undefined)

provideCheckboxRootContext({
  disabled,
  state: checkboxState,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :id="id"
    :ref="forwardRef"
    role="checkbox"
    :as-child="props.asChild"
    :as="as"
    :type="as === 'button' ? 'button' : undefined"
    :aria-checked="isIndeterminate(checkboxState) ? 'mixed' : checkboxState"
    :aria-required="false"
    :aria-label="$attrs['aria-label'] || ariaLabel"
    :data-state="getState(checkboxState)"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @keydown.enter.prevent="() => {
      // According to WAI ARIA, Checkboxes don't activate on enter keypress
    }"
    @click=" changeModelValue(value)"
  >
    <slot
      :model-value="modelValue"
      :state="checkboxState"
    />

    <VisuallyHiddenInput
      v-if="isFormControl && name"
      type="checkbox"
      :checked="!!checkboxState"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
    />
  </Primitive>
</template>
