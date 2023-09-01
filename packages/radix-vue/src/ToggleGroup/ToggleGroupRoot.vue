<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { Direction, Orientation } from '@/shared/types'
import { useSingleOrMultipleValue } from '@/shared/useSingleOrMultipleValue'
import { RovingFocusGroup } from '@/RovingFocus'

type TypeEnum = 'single' | 'multiple'

export interface ToggleGroupRootProps extends PrimitiveProps {
  type?: TypeEnum
  defaultValue?: string | string[]
  modelValue?: string | string[]
  rovingFocus?: boolean
  disabled?: boolean
  orientation?: Orientation
  dir?: Direction
  loop?: boolean
}
export type ToggleGroupRootEmits = {
  'update:modelValue': [payload: string]
}

export const TOGGLE_GROUP_INJECTION_KEY
  = Symbol() as InjectionKey<ToggleGroupProvideValue>

interface ToggleGroupProvideValue {
  type: TypeEnum
  modelValue: Ref<string | string[] | undefined>
  changeModelValue: (value: string) => void
  dir?: Ref<Direction>
  orientation?: Orientation
  loop: Ref<boolean>
  rovingFocus: Ref<boolean>
  disabled?: Ref<boolean>
}
</script>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: 'single',
  loop: true,
  dir: 'ltr',
  orientation: 'horizontal',
  rovingFocus: true,
  disabled: false,
})
const emits = defineEmits<ToggleGroupRootEmits>()

const { loop, rovingFocus, disabled, dir } = toRefs(props)

const [modelValue, changeModelValue] = useSingleOrMultipleValue(props, emits)

provide(TOGGLE_GROUP_INJECTION_KEY, {
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
    <Primitive role="group" :as-child="asChild" :as="as">
      <slot :model-value="modelValue" />
    </Primitive>
  </component>
</template>
