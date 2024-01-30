<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export type NavigationMenuLinkEmits = {
  /** Event handler called when the user selects a link (via mouse or keyboard).
   *
   * Calling `event.preventDefault` in this handler will prevent the navigation menu from closing when selecting that link. */
  'select': [payload: MouseEvent]
}
export interface NavigationMenuLinkProps extends PrimitiveProps {
  /** Used to identify the link as the currently active page. */
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

useForwardExpose()
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
