<script lang="ts">
import type { ComputedRef, Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction, SingleOrMultipleProps, SingleOrMultipleType } from '../shared/types'
import { createContext, useDirection, useForwardExpose } from '@/shared'

export interface ToggleGroupRootProps<ValidValue = string | string[], ExplicitType = SingleOrMultipleType>
  extends PrimitiveProps, SingleOrMultipleProps<ValidValue, ExplicitType> {
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
  isSingle: ComputedRef<boolean>
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

defineSlots<{
  default(props: {
    /** Current toggle values */
    modelValue: typeof modelValue.value
  }): any
}>()

const { loop, rovingFocus, disabled, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
const { forwardRef } = useForwardExpose()

const { modelValue, changeModelValue, isSingle } = useSingleOrMultipleValue(props, emits)

provideToggleGroupRootContext({
  isSingle,
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
