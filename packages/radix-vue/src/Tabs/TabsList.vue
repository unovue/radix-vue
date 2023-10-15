<script lang="ts">
export interface TabsListProps extends PrimitiveProps {
  loop?: boolean
}
</script>

<script setup lang="ts">
import { toRefs } from 'vue'
import { injectTabsRootContext } from './TabsRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
} from '@/Primitive'
import { RovingFocusGroup } from '@/RovingFocus'

const props = withDefaults(defineProps<TabsListProps>(), {
  loop: true,
})
const { loop } = toRefs(props)

const rootContext = injectTabsRootContext()
</script>

<template>
  <RovingFocusGroup as-child :orientation="rootContext.orientation.value" :dir="rootContext.dir.value" :loop="loop">
    <Primitive
      role="tablist"
      :as-child="asChild"
      :as="as"
      :aria-orientation="rootContext.orientation.value"
    >
      <slot />
    </Primitive>
  </RovingFocusGroup>
</template>
