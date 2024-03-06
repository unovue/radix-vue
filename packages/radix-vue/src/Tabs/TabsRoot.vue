<script lang="ts">
import type { Ref } from 'vue'
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation, Direction } from '../shared/types'
import { createContext, useDirection, useForwardExpose, useId } from '@/shared'

export interface TabsRootContext {
  modelValue: Ref<string | undefined>
  changeModelValue: (value: string) => void
  orientation: Ref<DataOrientation>
  dir: Ref<Direction>
  activationMode: 'automatic' | 'manual'
  baseId: string
  tabsList: Ref<HTMLElement | undefined>
}

export interface TabsRootProps extends PrimitiveProps {
  /**
   * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs
   */
  defaultValue?: string
  /**
   * The orientation the tabs are layed out.
   * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
   * @defaultValue horizontal
   */
  orientation?: DataOrientation
  /**
   * The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   */
  dir?: Direction
  /**
   * Whether a tab is activated automatically or manually.
   * @defaultValue automatic
   */
  activationMode?: 'automatic' | 'manual'
  /** The controlled value of the tab to activate. Can be bind as `v-model`. */
  modelValue?: string
}
export type TabsRootEmits = {
  /** Event handler called when the value changes */
  'update:modelValue': [payload: string]
}

export const [injectTabsRootContext, provideTabsRootContext]
  = createContext<TabsRootContext>('TabsRoot')
</script>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useVModel } from '@vueuse/core'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<TabsRootProps>(), {
  orientation: 'horizontal',
  activationMode: 'automatic',
})
const emits = defineEmits<TabsRootEmits>()
const { orientation, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)
useForwardExpose()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: (props.modelValue === undefined) as false,
})

const tabsList = ref<HTMLElement>()

provideTabsRootContext({
  modelValue,
  changeModelValue: (value: string) => {
    modelValue.value = value
  },
  orientation,
  dir,
  activationMode: props.activationMode,
  baseId: useId(undefined, 'radix-vue-tabs'),
  tabsList,
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
