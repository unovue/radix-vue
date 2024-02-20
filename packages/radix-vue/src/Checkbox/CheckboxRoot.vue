<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { createContext, useFormControl, useForwardExpose } from '@/shared'
import type { CheckedState } from './utils'

export interface CheckboxRootProps extends PrimitiveProps {
  /** The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state. */
  defaultChecked?: boolean
  /** The controlled checked state of the checkbox. Can be binded with v-model. */
  checked?: boolean | 'indeterminate'
  /** When `true`, prevents the user from interacting with the checkbox */
  disabled?: boolean
  /** When `true`, indicates that the user must check the checkbox before the owning form can be submitted. */
  required?: boolean
  /** The name of the checkbox. Submitted with its owning form as part of a name/value pair. */
  name?: string
  /** The value given as data when submitted with a `name`.
   *  @defaultValue "on"
   */
  value?: string
  /** Id of the element */
  id?: string
}

export type CheckboxRootEmits = {
  /** Event handler called when the checked state of the checkbox changes. */
  'update:checked': [value: boolean]
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
const { disabled } = toRefs(props)

const checked = useVModel(props, 'checked', emits, {
  defaultValue: props.defaultChecked,
  passive: (props.checked === undefined) as false,
}) as Ref<CheckedState>

const { forwardRef, currentElement } = useForwardExpose()
const isFormControl = useFormControl(currentElement)
const ariaLabel = computed(() => props.id && currentElement.value
  ? (document.querySelector(`[for="${props.id}"]`) as HTMLLabelElement)?.innerText
  : undefined)

provideCheckboxRootContext({
  disabled,
  state: checked,
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
    :aria-checked="isIndeterminate(checked) ? 'mixed' : checked"
    :aria-required="false"
    :aria-label="$attrs['aria-label'] || ariaLabel"
    :data-state="getState(checked)"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @keydown.enter.prevent="() => {
      // According to WAI ARIA, Checkboxes don't activate on enter keypress
    }"
    @click="checked = isIndeterminate(checked) ? true : !checked"
  >
    <slot />
  </Primitive>

  <input
    v-if="isFormControl"
    type="checkbox"
    tabindex="-1"
    aria-hidden
    :value="value"
    :checked="!!checked"
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
