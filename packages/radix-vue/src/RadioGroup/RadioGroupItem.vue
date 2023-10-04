<script lang="ts">
export interface RadioGroupItemProps extends Omit<RadioProps, 'checked'> {}

interface RadioItemProvideValue {
  disabled: ComputedRef<boolean>
  checked: ComputedRef<boolean>
}

export const RADIO_GROUP_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<RadioItemProvideValue>

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import {
  type ComputedRef,
  type InjectionKey,
  computed,
  inject,
  provide,
  ref,
} from 'vue'
import { RADIO_GROUP_INJECTION_KEY } from './RadioGroupRoot.vue'
import {
  usePrimitiveElement,
} from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import Radio, { type RadioProps } from './Radio.vue'
import { useEventListener } from '@vueuse/core'

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  disabled: false,
  as: 'button',
})
const { primitiveElement, currentElement } = usePrimitiveElement()

const context = inject(RADIO_GROUP_INJECTION_KEY)

const disabled = computed(() => context?.disabled.value || props.disabled)
const checked = computed(() => context?.modelValue?.value === props.value)

provide(RADIO_GROUP_ITEM_INJECTION_KEY, { disabled, checked })

const isArrowKeyPressed = ref(false)
const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

useEventListener('keydown', (event) => {
  if (ARROW_KEYS.includes(event.key))
    isArrowKeyPressed.value = true
})
useEventListener('keyup', () => {
  isArrowKeyPressed.value = false
})

function handleFocus() {
  setTimeout(() => {
    /**
     * Our `RovingFocusGroup` will focus the radio when navigating with arrow keys
     * and we need to 'check' it in that case. We click it to 'check' it (instead
     * of updating `context.value`) so that the radio change event fires.
     */
    if (isArrowKeyPressed.value)
      currentElement.value?.click()
  }, 0)
}
</script>

<template>
  <RovingFocusItem :checked="checked" :disabled="disabled" as-child :focusable="!disabled" :active="checked">
    <Radio
      ref="primitiveElement"
      v-bind="{ ...$attrs, ...props }"
      :checked="checked"
      @update:checked="context?.changeModelValue(value)"
      @keydown.enter.prevent
      @focus="handleFocus"
    >
      <slot />
    </Radio>
  </RovingFocusItem>
</template>
