<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction } from '../shared/types'
import { createContext, useDirection, useForwardExpose, } from '@/shared'
import { RovingFocusGroup } from '@/RovingFocus'
import { useVModel } from '@vueuse/core'

export interface StepperRootContext {
  modelValue: Ref<number | undefined>
  changeModelValue: (value: number) => void
  orientation: Ref<DataOrientation>
  dir: Ref<Direction>
  activationMode: 'automatic' | 'manual'
}

export interface StepperRootProps extends PrimitiveProps {
  /**
   * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs
   */
  defaultValue?: number
  /**
   * The orientation the tabs are laid out.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   * @defaultValue horizontal
   */
  orientation?: DataOrientation
  /**
   * The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   */
  dir?: Direction
  /** The controlled value of the tab to activate. Can be bind as `v-model`. */
  modelValue?: number
  /** Whether or not the steps must be completed in order */
  linear?: boolean
}
export type StepperRootEmits = {
  /** Event handler called when the value changes */
  'update:modelValue': [payload: number | undefined]
}

export const [injectStepperRootContext, provideStepperRootContext]
  = createContext<StepperRootContext>('StepperRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<StepperRootProps>(), {
  orientation: 'horizontal',
  activationMode: 'automatic',
})
const emits = defineEmits<StepperRootEmits>()

defineSlots<{
  default(props: {
    /** Current input values */
    modelValue: typeof modelValue.value
  }): any
}>()

const { dir: propDir, orientation: propOrientation } = toRefs(props)
const dir = useDirection(propDir)
useForwardExpose()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
})


provideStepperRootContext({
  modelValue,
  changeModelValue: (value: number) => {
    modelValue.value = value
  },
  orientation: propOrientation,
  dir,
  activationMode: props.activationMode,
})
</script>

<template>
  <RovingFocusGroup 
    as-child
    :orientation="orientation" 
    :dir="dir"
  > 
      <Primitive
        :as-child="asChild"
        :as="as"
      >
          <slot :model-value="modelValue" />
      </Primitive>
	</RovingFocusGroup>
</template>