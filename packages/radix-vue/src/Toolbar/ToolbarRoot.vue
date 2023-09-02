<script lang="ts">
import type { Ref } from 'vue'
import type { Direction, Orientation } from '@/shared/types'
import { createContext } from '@/shared'

export interface ToolbarRootProps extends PrimitiveProps {
  orientation?: Orientation
  dir?: Direction
  loop?: boolean
}

export interface ToolbarContextValue {
  orientation: Ref<Orientation>
  dir: Ref<Direction>
}

export const [injectToolbarContext, provideToolbarContext]
  = createContext<ToolbarContextValue>('ToolbarRoot')
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  orientation: 'horizontal',
  dir: 'ltr',
})
const { orientation, dir } = toRefs(props)

provideToolbarContext({ orientation, dir })
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
