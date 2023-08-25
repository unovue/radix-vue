<script lang="ts">
import type { InjectionKey, Ref } from 'vue'

export interface SwitchRootProps extends PrimitiveProps {
  defaultChecked?: boolean
  checked?: boolean
  // onCheckedChange?: void;
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
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
import { provide, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<SwitchRootProps>(), {
  asChild: false,
  disabled: false,
  defaultOpen: false,
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

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  checked,
  toggleCheck,
  disabled,
})

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter')
    toggleCheck()
}
</script>

<template>
  <Primitive
    :value="checked"
    role="switch"
    :aria-checked="checked"
    :data-state="checked ? 'checked' : 'unchecked'"
    :data-disabled="disabled ? '' : undefined"
    :as-child="asChild"
    :as="as"
    style="position: relative"
  >
    <slot />
    <input
      :id="id"
      type="checkbox"
      v-bind="checked"
      :name="name"
      aria-hidden="true"
      :disabled="disabled"
      :required="required"
      :data-state="checked ? 'checked' : 'unchecked'"
      :data-disabled="disabled ? '' : undefined"
      style="opacity: 0; position: absolute; inset: 0"
      @click="toggleCheck"
      @keydown="handleKeydown"
    >
  </Primitive>
</template>
