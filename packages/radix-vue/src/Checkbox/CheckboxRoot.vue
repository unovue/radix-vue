<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { createContext, useFormControl, useForwardExpose } from '@/shared'
import type { CheckedState } from './utils'

export interface CheckboxRootProps extends PrimitiveProps {
  /** The value of the checkbox when it is initially rendered. Use when you do not need to control its value. */
  defaultValue?: boolean
  /** The controlled value of the checkbox. Can be binded with v-model. */
  modelValue?: boolean | 'indeterminate'
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
  value?: string
  /** Id of the element */
  id?: string
}

export type CheckboxRootEmits = {
  /** Event handler called when the value of the checkbox changes. */
  'update:modelValue': [value: boolean]
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

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<CheckboxRootProps>(), {
  checked: undefined,
  value: 'on',
  as: 'button',
})
const emits = defineEmits<CheckboxRootEmits>()

defineSlots<{
  default: (props: {
    /** Current value */
    modelValue: typeof modelValue.value
  }) => any
}>()

const { disabled } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
}) as Ref<CheckedState>

const { forwardRef, currentElement } = useForwardExpose()
const isFormControl = useFormControl(currentElement)
const ariaLabel = computed(() => props.id && currentElement.value
  ? (document.querySelector(`[for="${props.id}"]`) as HTMLLabelElement)?.innerText
  : undefined)

provideCheckboxRootContext({
  disabled,
  state: modelValue,
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
    :aria-checked="isIndeterminate(modelValue) ? 'mixed' : modelValue"
    :aria-required="false"
    :aria-label="$attrs['aria-label'] || ariaLabel"
    :data-state="getState(modelValue)"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @keydown.enter.prevent="() => {
      // According to WAI ARIA, Checkboxes don't activate on enter keypress
    }"
    @click="modelValue = isIndeterminate(modelValue) ? true : !modelValue"
  >
    <slot :model-value="modelValue" />
  </Primitive>

  <input
    v-if="isFormControl"
    type="checkbox"
    tabindex="-1"
    aria-hidden
    :value="value"
    :checked="!!modelValue"
    :name="props.name"
    :disabled="props.disabled"
    :required="props.required"
    :style="{
      transform: 'translateX(-100%)',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
  >
</template>
