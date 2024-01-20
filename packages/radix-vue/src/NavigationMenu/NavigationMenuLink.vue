<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export type NavigationMenuLinkEmits = {
  'select': [payload: MouseEvent]
}
export interface NavigationMenuLinkProps extends PrimitiveProps {
  active?: boolean
}
</script>

<script setup lang="ts">
import { nextTick } from 'vue'
import { Primitive } from '@/Primitive'
import { EVENT_ROOT_CONTENT_DISMISS } from './utils'

// const LINK_SELECT = "navigationMenu.linkSelect";

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  as: 'a',
})
const emits = defineEmits<NavigationMenuLinkEmits>()

const { forwardRef } = useForwardRef()
async function handleClick(ev: MouseEvent) {
  emits('select', ev)

  await nextTick()
  if (!ev.defaultPrevented && !ev.metaKey) {
    const rootContentDismissEvent = new CustomEvent(
      EVENT_ROOT_CONTENT_DISMISS,
      {
        bubbles: true,
        cancelable: true,
      },
    )
    ev.target?.dispatchEvent(rootContentDismissEvent)
  }
}
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :data-active="active ? '' : undefined"
    :aria-current="active ? 'page' : undefined"
    :as-child="props.asChild"
    data-radix-vue-collection-item
    @click="handleClick"
  >
    <slot />
  </Primitive>
</template>
