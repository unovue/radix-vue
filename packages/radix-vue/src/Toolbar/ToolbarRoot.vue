<script lang="ts">
import type { InjectionKey, Ref } from 'vue'
import type { Direction, Orientation } from '@/shared/types'

export interface ToolbarRootProps extends PrimitiveProps {
  orientation?: Orientation
  dir?: Direction
  loop?: boolean
}

export const TOOLBAR_INJECTION_KEY
  = Symbol() as InjectionKey<ToolbarProvideValue>

export interface ToolbarProvideValue {
  orientation: Ref<Orientation>
  dir: Ref<Direction>
}
</script>

<script setup lang="ts">
import { provide, toRefs } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<ToolbarRootProps>(), {
  orientation: 'horizontal',
  dir: 'ltr',
})
const { orientation, dir } = toRefs(props)

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
