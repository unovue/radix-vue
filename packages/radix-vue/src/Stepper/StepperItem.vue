<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { createContext, useForwardExpose } from '@/shared'


export interface StepperItemContext {
  titleId: string;
  descriptionId: string;
  contentElement: Ref<HTMLElement | undefined>
}

export interface StepperItemProps extends PrimitiveProps {
  /** A unique value that associates the trigger with a content. */
  value: number
  /** When `true`, prevents the user from interacting with the tab. */
  disabled?: boolean
}


export const [injectStepperItemContext, provideStepperItemContext]
  = createContext<StepperItemContext>('StepperItem')
</script>

<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'
import { useId } from '@/shared'
import { injectStepperRootContext } from './StepperRoot.vue'
import { Primitive } from '@/Primitive'
import { RovingFocusItem } from '@/RovingFocus'

const props = withDefaults(defineProps<StepperItemProps>(), {
  disabled: false,
  as: 'button',
})

const { forwardRef, currentElement: contentElement } = useForwardExpose()
const rootContext = injectStepperRootContext()
const contextContentElement = ref<HTMLElement>()
const titleId = useId(undefined, 'radix-vue-stepper-item-title')
const descriptionId = useId(undefined, 'radix-vue-stepper-item-description')

const isSelected = computed(() => props.value === rootContext.modelValue.value)

onMounted(() => {
  contextContentElement.value = contentElement.value
})

provideStepperItemContext({
  titleId,
  descriptionId,
  contentElement: contextContentElement,
})
</script>

<template>
  <RovingFocusItem as-child :focusable="!disabled" :active="isSelected">
    <Primitive
      :ref="forwardRef"
      role="tab"
      :type="as === 'button' ? 'button' : undefined"
      :as="as"
      :as-child="asChild"
      :aria-selected="isSelected ? 'true' : 'false'"
      :data-state="isSelected ? 'active' : 'inactive'"
      :disabled="disabled"
      :data-disabled="disabled ? '' : undefined"
      :data-orientation="rootContext.orientation.value"
      @mousedown.left="(event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.ctrlKey === false) {
          rootContext.changeModelValue(value);
        }
        else {
          // prevent focus to avoid accidental activation
          event.preventDefault();
        }
      }"
      @keydown.enter.space="rootContext.changeModelValue(value)"
    >
      <slot />
    </Primitive>
  </RovingFocusItem>
</template>