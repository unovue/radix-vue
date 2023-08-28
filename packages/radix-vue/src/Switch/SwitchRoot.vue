<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export interface SwitchRootProps extends PrimitiveProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  value?: string
}

export type SwitchRootEmits = {
  'update:checked': [payload: boolean]
}

export const SWITCH_INJECTION_KEY
  = Symbol() as InjectionKey<SwitchProvideValue>

export interface SwitchProvideValue {
  checked?: Ref<boolean>
  toggleCheck: () => void
  disabled: Ref<boolean>
}
</script>

<script setup lang="ts">
import { computed, provide, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'

const props = withDefaults(defineProps<SwitchRootProps>(), {
  as: 'button',
  asChild: false,
  disabled: false,
  defaultOpen: false,
  value: 'on',
})
const emit = defineEmits<SwitchRootEmits>()
const { disabled } = toRefs(props)

const checked = useVModel(props, 'checked', emit, {
  defaultValue: props.defaultChecked,
  passive: true, // set passive to true so that if no props.modelValue was passed, it will still update
})

function toggleCheck() {
  checked.value = !checked.value
}

const { primitiveElement, currentElement } = usePrimitiveElement()
// We set this to true by default so that events bubble to forms without JS (SSR)
const isFormControl = computed(() => currentElement.value ? Boolean(currentElement.value.closest('form')) : true)
const ariaLabel = computed(() => props.id && currentElement.value ? (document.querySelector(`[for=${props.id}]`) as HTMLLabelElement)?.innerText : undefined)

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  checked,
  toggleCheck,
  disabled,
})
</script>

<template>
  <Primitive
    v-bind="$attrs"
    ref="primitiveElement"
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
    @click="toggleCheck"
    @keydown.enter.prevent="toggleCheck"
  >
    <slot />
  </Primitive>

  <input
    v-if="isFormControl"
    :id="id"
    v-model="checked"
    type="checkbox"
    :name="name"
    tabindex="-1"
    aria-hidden
    :disabled="disabled"
    :required="required"
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
