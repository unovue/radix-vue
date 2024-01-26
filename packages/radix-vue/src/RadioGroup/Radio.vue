<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export type RadioEmits = {
  'update:checked': [value: boolean]
}

export interface RadioProps extends PrimitiveProps {
  id?: string
  /** The value given as data when submitted with a `name`. */
  value?: string
  /** When `true`, prevents the user from interacting with the radio item. */
  disabled?: boolean
  /** When `true`, indicates that the user must check the radio item before the owning form can be submitted. */
  required?: boolean
  checked?: boolean
  name?: string
}
</script>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'
import { useFormControl, useForwardExpose } from '@/shared'

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  checked: undefined,
  as: 'button',
})
const emits = defineEmits<RadioEmits>()
const checked = useVModel(props, 'checked', emits, {
  passive: (props.checked === undefined) as false,
})

const { value } = toRefs(props)
const { forwardRef, currentElement: triggerElement } = useForwardExpose()
const isFormControl = useFormControl(triggerElement)

const ariaLabel = computed(() => props.id && triggerElement.value ? (document.querySelector(`[for="${props.id}"]`) as HTMLLabelElement)?.innerText ?? props.value : undefined)

function handleClick(event: MouseEvent) {
  checked.value = true

  if (isFormControl.value) {
    // if radio is in a form, stop propagation from the button so that we only propagate
    // one click event (from the input). We propagate changes from an input so that native
    // form validation works and form events reflect radio updates.
    event.stopPropagation()
  }
}
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :id="id"
    :ref="forwardRef"
    role="radio"
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :aria-checked="checked"
    :aria-label="ariaLabel"
    :as-child="asChild"
    :disabled="disabled ? true : undefined"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :value="value"
    :required="required"
    :name="name"
    @click.stop="handleClick"
  >
    <slot />

    <input
      v-if="isFormControl"
      type="radio"
      tabindex="-1"
      aria-hidden
      :value="value"
      :checked="!!checked"
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
    >
  </Primitive>
</template>
