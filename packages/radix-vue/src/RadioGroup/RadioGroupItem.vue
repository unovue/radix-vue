<script lang="ts">
import type { ComputedRef } from 'vue'
import type { RadioProps } from './Radio.vue'
import { createContext, useForwardExpose } from '@/shared'

export interface RadioGroupItemProps extends Omit<RadioProps, 'checked'> {}

interface RadioGroupItemContext {
  disabled: ComputedRef<boolean>
  checked: ComputedRef<boolean>
}

export const [injectRadioGroupItemContext, provideRadiogroupItemContext]
  = createContext<RadioGroupItemContext>('RadioGroupItem')
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Radio from './Radio.vue'
import { injectRadioGroupRootContext } from './RadioGroupRoot.vue'
import { RovingFocusItem } from '@/RovingFocus'
import { useEventListener } from '@vueuse/core'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<RadioGroupItemProps>(), {
  disabled: false,
  as: 'button',
})
const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectRadioGroupRootContext()

const disabled = computed(() => rootContext.disabled.value || props.disabled)
const required = computed(() => rootContext.required.value || props.required)
const checked = computed(() => rootContext.modelValue?.value === props.value)

provideRadiogroupItemContext({ disabled, checked })

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
      v-bind="{ ...$attrs, ...props }"
      :ref="forwardRef"
      :checked="checked"
      :required="required"
      @update:checked="rootContext.changeModelValue(value)"
      @keydown.enter.prevent
      @focus="handleFocus"
    >
      <slot />
    </Radio>
  </RovingFocusItem>
</template>
