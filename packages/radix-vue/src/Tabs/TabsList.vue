<script lang="ts">
export interface TabsListProps extends PrimitiveProps {
  loop?: boolean
}
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { injectTabsContext } from './TabsRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<TabsListProps>(), {
  loop: true,
})
const { loop } = toRefs(props)

const context = injectTabsContext()
</script>

<template>
  <RovingFocusGroup as-child :orientation="context.orientation.value" :dir="context.dir.value" :loop="loop">
    <Primitive
      role="tablist"
      :as-child="asChild"
      :as="as"
      :aria-orientation="context.orientation.value"
    >
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
