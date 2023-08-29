<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { useVModel } from '@vueuse/core'

export interface CheckboxRootProps extends PrimitiveProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  id?: string
}

export type CheckboxRootEmits = {
  'update:checked': [value: boolean]
}

interface CheckboxProvideValue {
  disabled: Ref<boolean>
  state: Ref<CheckedState>
}

export const CHECKBOX_INJECTION_KEY
  = Symbol() as InjectionKey<CheckboxProvideValue>

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed, provide, toRefs } from 'vue'
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import type { CheckedState } from './utils'
import { getState, isIndeterminate } from './utils'

const props = withDefaults(defineProps<CheckboxRootProps>(), {
  checked: undefined,
  value: 'on',
  as: 'button',
})
const emits = defineEmits<CheckboxRootEmits>()
const { disabled } = toRefs(props)

const checked = useVModel(props, 'checked', emits, {
  defaultValue: props.defaultChecked,
  passive: true,
})

const { primitiveElement, currentElement } = usePrimitiveElement()
// We set this to true by default so that events bubble to forms without JS (SSR)
const isFormControl = computed(() => currentElement.value ? Boolean(currentElement.value.closest('form')) : true)
const ariaLabel = computed(() => props.id && currentElement.value ? (document.querySelector(`[for=${props.id}]`) as HTMLLabelElement)?.innerText : undefined)

provide(CHECKBOX_INJECTION_KEY, {
  disabled,
  state: checked,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :id="id"
    ref="primitiveElement"
    role="checkbox"
    :as-child="props.asChild"
    :as="as"
    :type="as === 'button' ? 'button' : undefined"
    :value="value"
    :aria-checked="isIndeterminate(checked) ? 'mixed' : checked"
    :aria-required="required"
    :aria-label="$attrs['aria-label'] || ariaLabel"
    :data-state="getState(checked)"
    :data-disabled="disabled ? '' : undefined"
    :disabled="disabled"
    @keydown.enter.prevent="() => {
      // According to WAI ARIA, Checkboxes don't activate on enter keypress
    }"
    @click="checked = !checked"
  >
    <slot />
  </Primitive>

  <input
    v-if="isFormControl"
    type="checkbox"
    tabindex="-1"
    aria-hidden
    :defaultChecked="isIndeterminate(checked) ? false : checked"
    :checked="checked"
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
