<script lang="ts">
import type { Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { toRefs } from 'vue'
import type { Direction, Orientation } from '@/shared/types'
import { createContext, useId } from '@/shared'

export interface TabsContextValue {
  modelValue: Ref<string | undefined>
  changeModelValue: (value: string) => void
  orientation: Ref<Orientation>
  dir: Ref<Direction>
  activationMode: 'automatic' | 'manual'
  baseId: string
}

export const [injectTabsContext, provideTabsContext]
  = createContext<TabsContextValue>('TabsRoot')
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
  orientation?: Orientation
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

provideTabsContext({
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
