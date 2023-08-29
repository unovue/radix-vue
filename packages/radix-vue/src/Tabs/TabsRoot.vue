<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { provide, toRefs } from 'vue'
import type { DataOrientation, Direction } from '../shared/types'
import { useId } from '@/shared'

export const TABS_INJECTION_KEY = Symbol() as InjectionKey<TabsProvideValue>
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface TabsRootProps extends PrimitiveProps {
  defaultValue?: string
  /**
   * The orientation the tabs are layed out.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   * @defaultValue horizontal
   */
  orientation?: DataOrientation
  /**
   * The direction of navigation between toolbar items.
   */
  dir?: Direction
  /**
   * Whether a tab is activated automatically or manually.
   * @defaultValue automatic
   * */
  activationMode?: 'automatic' | 'manual'
  modelValue?: string
}
export type TabsRootEmits = {
  'update:modelValue': [payload: string]
}

export interface TabsProvideValue {
  modelValue: Ref<string | undefined>
  changeModelValue: (value: string) => void
  orientation: Ref<DataOrientation>
  dir: Ref<Direction>
  activationMode: 'automatic' | 'manual'
  baseId: string
}

const props = withDefaults(defineProps<TabsRootProps>(), {
  orientation: 'horizontal',
  dir: 'ltr',
  activationMode: 'automatic',
})
const emits = defineEmits<TabsRootEmits>()
const { orientation, dir } = toRefs(props)

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})

provide<TabsProvideValue>(TABS_INJECTION_KEY, {
  modelValue,
  changeModelValue: (value: string) => {
    modelValue.value = value
  },
  orientation,
  dir,
  activationMode: props.activationMode,
  baseId: useId(),
})
</script>

<template>
  <Primitive
    :dir="dir"
    :data-orientation="orientation"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
