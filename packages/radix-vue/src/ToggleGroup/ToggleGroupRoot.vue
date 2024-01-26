<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction } from '../shared/types'
import { createContext, useDirection, useForwardExpose } from '@/shared'

type TypeEnum = 'single' | 'multiple'

export interface ToggleGroupRootProps extends PrimitiveProps {
  /** Determines whether a single or multiple items can be pressed at a time. */
  type?: TypeEnum
  /** The value of the item to show as pressed when initially rendered. Use when you do not need to control the state of the items. */
  defaultValue?: string | string[]
  /** The controlled value of the pressed item. Can be bind as `v-model`. */
  modelValue?: string | string[]
  /** When `false`, navigating through the items using arrow keys will be disabled. */
  rovingFocus?: boolean
  /** When `true`, prevents the user from interacting with the toggle group and all its items. */
  disabled?: boolean
  /** The orientation of the component, which determines how focus moves: `horizontal` for left/right arrows and `vertical` for up/down arrows. */
  orientation?: DataOrientation
  /** The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
  dir?: Direction
  /** When `loop` and `rovingFocus` is `true`, keyboard navigation will loop from last item to first, and vice versa. */
  loop?: boolean
}
export type ToggleGroupRootEmits = {
  /** Event handler called when the value changes. */
  'update:modelValue': [payload: string]
}

interface ToggleGroupRootContext {
  type: TypeEnum
  modelValue: Ref<string | string[] | undefined>
  changeModelValue: (value: string) => void
  dir?: Ref<Direction>
  orientation?: DataOrientation
  loop: Ref<boolean>
  rovingFocus: Ref<boolean>
  disabled?: Ref<boolean>
}

export const [injectToggleGroupRootContext, provideToggleGroupRootContext]
  = createContext<ToggleGroupRootContext>('ToggleGroupRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Primitive } from '@/Primitive'
import { useSingleOrMultipleValue } from '@/shared/useSingleOrMultipleValue'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: 'single',
  loop: true,
  rovingFocus: true,
  disabled: false,
})
const emits = defineEmits<ToggleGroupRootEmits>()

const { loop, rovingFocus, disabled, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
const { forwardRef } = useForwardExpose()

const { modelValue, changeModelValue } = useSingleOrMultipleValue(props, emits)

provideToggleGroupRootContext({
  type: props.type,
  modelValue,
  changeModelValue,
  dir,
  orientation: props.orientation,
  loop,
  rovingFocus,
  disabled,
})
</script>

<template>
  <component
    :is="rovingFocus ? RovingFocusGroup : Primitive"
    as-child
    :orientation="rovingFocus ? orientation : undefined"
    :dir="dir"
    :loop="rovingFocus ? loop : undefined"
  >
    <Primitive
      :ref="forwardRef"
      role="group"
      :as-child="asChild"
      :as="as"
    >
      <slot :model-value="modelValue" />
    </Primitive>
  </component>
</template>
