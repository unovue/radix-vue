<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useFormControl, useForwardExpose } from '@/shared'

export interface SwitchRootProps extends PrimitiveProps {
  /** The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultChecked?: boolean
  /** The controlled state of the switch. Can be bind as `v-model:checked`. */
  checked?: boolean
  /** When `true`, prevents the user from interacting with the switch. */
  disabled?: boolean
  /** When `true`, indicates that the user must check the switch before the owning form can be submitted. */
  required?: boolean
  /** The name of the switch. Submitted with its owning form as part of a name/value pair. */
  name?: string
  id?: string
  /** The value given as data when submitted with a `name`. */
  value?: string
}

export type SwitchRootEmits = {
  /** Event handler called when the checked state of the switch changes. */
  'update:checked': [payload: boolean]
}

export interface SwitchRootContext {
  checked?: Ref<boolean>
  toggleCheck: (e: Event) => void
  disabled: Ref<boolean>
}

export const [injectSwitchRootContext, provideSwitchRootContext]
  = createContext<SwitchRootContext>('SwitchRoot')
</script>

<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<SwitchRootProps>(), {
  as: 'button',
  checked: undefined,
  value: 'on',
})
const emit = defineEmits<SwitchRootEmits>()

defineSlots<{
  default: (props: {
    /** Current checked state */
    checked: typeof checked.value
  }) => any
}>()

const { disabled } = toRefs(props)

const checked = useVModel(props, 'checked', emit, {
  defaultValue: props.defaultChecked,
  passive: (props.checked === undefined) as false,
}) as Ref<boolean>

function toggleCheck(e: Event) {
  if (disabled.value)
    return

  checked.value = !checked.value

  if (isFormControl.value)
    e.stopPropagation()
}

const inputRef = ref<HTMLInputElement | null>(null)

const { forwardRef, currentElement } = useForwardExpose()
const isFormControl = useFormControl(currentElement)
const ariaLabel = computed(() => props.id && currentElement.value ? (document.querySelector(`[for="${props.id}"]`) as HTMLLabelElement)?.innerText : undefined)

provideSwitchRootContext({
  checked,
  toggleCheck,
  disabled,
})

watch(checked, (_checked, _prevChecked) => {
  const input = inputRef.value!
  const inputProto = window.HTMLInputElement.prototype
  const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked') as PropertyDescriptor
  const setChecked = descriptor.set

  if (isFormControl.value && _prevChecked !== _checked && setChecked) {
    const changeEvent = new Event('change', { bubbles: true })
    const inputEvent = new Event('input', { bubbles: true })
    setChecked.call(input, _checked)
    input.dispatchEvent(changeEvent)
    input.dispatchEvent(inputEvent)
  }
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :id="id"
    :ref="forwardRef"
    role="switch"
    :type="as === 'button' ? 'button' : undefined"
    :value="value"
    :aria-label="$attrs['aria-label'] || ariaLabel"
    :aria-checked="checked"
    :aria-required="required"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :as-child="asChild"
    :as="as"
    :disabled="disabled"
    @click="toggleCheck"
    @keydown.enter.prevent="toggleCheck"
  >
    <slot :checked="checked" />
  </Primitive>

  <input
    v-if="isFormControl"
    ref="inputRef"
    type="checkbox"
    :name="name"
    tabindex="-1"
    aria-hidden
    :disabled="disabled"
    :required="required"
    :value="value"
    :checked="!!checked"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :style="{
      transform: 'translateX(-100%)',
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    }"
  >
</template>
