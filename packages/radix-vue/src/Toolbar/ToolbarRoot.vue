<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { DataOrientation, Direction } from '@/shared/types'
import { useDirection } from '@/shared'

export interface ToolbarRootProps extends PrimitiveProps {
  orientation?: DataOrientation
  dir?: Direction
  loop?: boolean
}

export const TOOLBAR_INJECTION_KEY
  = Symbol() as InjectionKey<ToolbarProvideValue>

export interface ToolbarProvideValue {
  orientation: Ref<DataOrientation>
  dir: Ref<Direction>
}
</script>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  orientation: 'horizontal',
})
const { orientation, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

provide(TOOLBAR_INJECTION_KEY, { orientation, dir })
</script>

<template>
  <RovingFocusGroup as-child :orientation="orientation" :dir="dir" :loop="loop">
    <Primitive
      role="toolbar"
      :aria-orientation="orientation"
      :as-child="asChild"
      :as="as"
    >
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
