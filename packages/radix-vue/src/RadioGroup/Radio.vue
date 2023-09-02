<script lang="ts">
export interface RadioProps extends PrimitiveProps {
  id?: string
  value?: string
  disabled?: boolean
  required?: boolean
  checked?: boolean
}
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  toRefs,
} from 'vue'
import { injectRadioGroupContext } from './RadioGroupRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  as: 'button',
})
const { value, checked } = toRefs(props)
const { primitiveElement, currentElement: triggerElement } = usePrimitiveElement()

const context = injectRadioGroupContext()

// We set this to true by default so that events bubble to forms without JS (SSR)
const isFormControl = computed(() =>
  triggerElement.value ? Boolean(triggerElement.value.closest('form')) : true,
)
const ariaLabel = computed(() => props.id && triggerElement.value ? (document.querySelector(`[for=${props.id}]`) as HTMLLabelElement)?.innerText : undefined)

const hasConsumerStoppedPropagationRef = ref(false)

function handleClick(event: MouseEvent) {
  context.changeModelValue(value?.value)

  if (isFormControl.value && 'isPropagationStopped' in event) {
    // hasConsumerStoppedPropagationRef.value = event.isPropagationStopped() as boolean
    // if radio is in a form, stop propagation from the button so that we only propagate
    // one click event (from the input). We propagate changes from an input so that native
    // form validation works and form events reflect radio updates.
    if (!hasConsumerStoppedPropagationRef.value)
      event.stopPropagation()
  }
}
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :id="id"
    ref="primitiveElement"
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
    :name="context.name"
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
