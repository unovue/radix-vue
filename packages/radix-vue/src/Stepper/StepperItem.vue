<script lang="ts">
import { type Ref, computed, onMounted, ref, toRefs } from 'vue'

import { injectStepperRootContext } from './StepperRoot.vue'
import { Primitive } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useForwardExpose, useId } from '@/shared'

export const [injectStepperItemContext, provideStepperItemContext] = createContext<StepperItemContext>('StepperItem')

export type StepperState = 'completed' | 'active' | 'inactive'

export interface StepperItemContext {
  titleId: string
  descriptionId: string
  contentElement: Ref<HTMLElement | undefined>
  step: Ref<number>
  state: Ref<StepperState>
  disabled: Ref<boolean>
}

export interface StepperItemProps extends PrimitiveProps {
  /** A unique value that associates the stepper item with an index */
  step: number
  /** When `true`, prevents the user from interacting with the tab. */
  disabled?: boolean
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<StepperItemProps>(), {
  disabled: false,
  as: 'li',
})

const { disabled, step } = toRefs(props)

const { forwardRef, currentElement: contentElement } = useForwardExpose()

const rootContext = injectStepperRootContext()
const contextContentElement = ref<HTMLElement>()

const titleId = useId(undefined, 'radix-vue-stepper-item-title')
const descriptionId = useId(undefined, 'radix-vue-stepper-item-description')

const itemState = computed(() => {
  if (rootContext.modelValue.value === step.value)
    return 'active'
  else if (rootContext.modelValue.value! > step.value)
    return 'completed'
  else
    return 'inactive'
})

const isFocusable = computed(() => {
  if (disabled.value)
    return false
  if (rootContext.linear.value) {
    return step.value <= rootContext.modelValue.value! || step.value === rootContext.modelValue.value! + 1
  }
  return true
})

onMounted(() => {
  contextContentElement.value = contentElement.value
})

provideStepperItemContext({
  titleId,
  descriptionId,
  contentElement: contextContentElement,
  state: itemState,
  disabled,
  step,
})
</script>

<template>
  <RovingFocusItem
    as-child
    :focusable="isFocusable"
    :active="itemState === 'active'"
  >
    <Primitive
      :ref="forwardRef"
      :as="as"
      :as-child="asChild"
      :aria-current="itemState === 'active' ? 'true' : undefined"
      :data-state="itemState"
      :disabled="disabled"
      :data-disabled="disabled ? '' : undefined"
      :data-orientation="rootContext.orientation.value"
      @mousedown.left="(event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.ctrlKey === false) {
          rootContext.changeModelValue(step);
        }
        else {
          // prevent focus to avoid accidental activation
          event.preventDefault();
        }
      }"
      @keydown.enter.space="rootContext.changeModelValue(step)"
    >
      {{ isFocusable ? 'focusable' : 'not focusable' }}
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>
