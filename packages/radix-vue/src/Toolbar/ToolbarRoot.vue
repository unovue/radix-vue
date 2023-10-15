<script lang="ts">
import type { Ref } from 'vue'
import type { DataOrientation, Direction } from '@/shared/types'
import { createContext, useDirection } from '@/shared'

export interface ToolbarRootProps extends PrimitiveProps {
  orientation?: DataOrientation
  dir?: Direction
  loop?: boolean
}

export interface ToolbarRootContext {
  orientation: Ref<DataOrientation>
  dir: Ref<Direction>
}

export const [injectToolbarRootContext, provideToolbarRootContext]
  = createContext<ToolbarRootContext>('ToolbarRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  orientation: 'horizontal',
})
const { orientation, dir: propDir } = toRefs(props)
const dir = useDirection(propDir)

provideToolbarRootContext({ orientation, dir })
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
