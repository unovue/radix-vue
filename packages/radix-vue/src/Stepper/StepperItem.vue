<script lang="ts">
import { type Ref, computed, onMounted, onUnmounted, toRefs, watch } from 'vue'

import { injectStepperRootContext } from './StepperRoot.vue'
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useArrowNavigation, useForwardExpose, useId, useKbd } from '@/shared'

export const [injectStepperItemContext, provideStepperItemContext] = createContext<StepperItemContext>('StepperItem')

export type StepperState = 'completed' | 'active' | 'inactive'

export interface StepperItemContext {
  titleId: string
  descriptionId: string
  step: Ref<number>
  state: Ref<StepperState>
  disabled: Ref<boolean>
}

export interface StepperItemProps extends PrimitiveProps {
  /** A unique value that associates the stepper item with an index */
  step: number
  /** When `true`, prevents the user from interacting with the tab. */
  disabled?: boolean
  /** Shows whether the step is completed. */
  completed?: boolean
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<StepperItemProps>(), {
  completed: false,
  disabled: false,
  as: 'li',
})

defineSlots<{
  default: (props: {
    /** The current state of the stepper item */
    state: StepperState
  }) => any
}>()

const { disabled, step, completed } = toRefs(props)
const kbd = useKbd()

const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectStepperRootContext()
const stepperItems = computed(() => Array.from(rootContext.stepperItems.value))

const titleId = useId(undefined, 'radix-vue-stepper-item-title')
const descriptionId = useId(undefined, 'radix-vue-stepper-item-description')

const itemState = computed(() => {
  if (completed.value)
    return 'completed'
  if (rootContext.modelValue.value === step.value)
    return 'active'
  if (rootContext.modelValue.value! > step.value)
    return 'completed'
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

function handleMouseDown(event: MouseEvent) {
  if (disabled.value)
    return
  if (rootContext.linear.value) {
    if (step.value <= rootContext.modelValue.value! || step.value === rootContext.modelValue.value! + 1) {
      if (event.ctrlKey === false) {
        rootContext.changeModelValue(step.value)
        return
      }
    }
  }
  else {
    if (event.ctrlKey === false) {
      rootContext.changeModelValue(step.value)
      return
    }
  }

  // prevent focus to avoid accidental activation
  event.preventDefault()
}

function handleKeyDown(event: KeyboardEvent) {
  if (disabled.value)
    return

  if ((event.key === kbd.ENTER || event.key === kbd.SPACE) && event.ctrlKey === false) {
    rootContext.changeModelValue(step.value)
  }

  if ([kbd.ARROW_LEFT, kbd.ARROW_RIGHT, kbd.ARROW_UP, kbd.ARROW_DOWN].includes(event.key)) {
    useArrowNavigation(event, document.activeElement as HTMLElement, undefined, {
      itemsArray: stepperItems.value,
      focus: true,
      loop: false,
      arrowKeyOptions: rootContext.orientation.value,
      dir: rootContext.dir.value,
    })
  }
}

onMounted(() => {
  if (isFocusable.value)
    rootContext.stepperItems.value.add(currentElement.value)
})

onUnmounted(() => {
  rootContext.stepperItems.value.delete(currentElement.value)
})

watch(isFocusable, (newValue) => {
  if (newValue)
    rootContext.stepperItems.value.add(currentElement.value)
  else
    rootContext.stepperItems.value.delete(currentElement.value)
})

provideStepperItemContext({
  titleId,
  descriptionId,
  state: itemState,
  disabled,
  step,
})
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :aria-current="itemState === 'active' ? 'true' : undefined"
    :data-state="itemState"
    :disabled="disabled || !isFocusable ? '' : undefined"
    :data-disabled="disabled || !isFocusable ? '' : undefined"
    :data-orientation="rootContext.orientation.value"
    :tabindex="isFocusable ? 0 : -1"
    @mousedown.left="handleMouseDown"
    @keydown.enter.space.left.right.up.down="handleKeyDown"
  >
    <slot :state="itemState" />
  </Primitive>
</template>
