<script lang="ts">
import type { Ref } from 'vue'
import type { Direction, Orientation } from '@/shared/types'
import type { Type } from '@/shared/useSingleOrMultipleValue'
import { useSingleOrMultipleValue } from '@/shared/useSingleOrMultipleValue'
import { RovingFocusGroup } from '@/RovingFocus'
import { createContext } from '@/shared'

export interface ToggleGroupRootProps extends PrimitiveProps {
  type?: Type
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

interface ToggleGroupContextValue {
  type: Type
  modelValue: Ref<string | string[] | undefined>
  changeModelValue: (value: string) => void
  dir?: Ref<Direction>
  orientation?: Orientation
  loop: Ref<boolean>
  rovingFocus: Ref<boolean>
  disabled?: Ref<boolean>
}

export const [injectToggleGroupContext, provideToggleGroupContext]
  = createContext<ToggleGroupContextValue>('ToggleGroupRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
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

provideToggleGroupContext({
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
