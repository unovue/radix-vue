<script lang="ts">
export interface NavigationMenuLinkProps extends PrimitiveProps {
  active?: boolean
}
export interface NavigationMenuLinkEmits {
  (e: 'select', payload: MouseEvent): void
}
</script>

<script setup lang="ts">
import { nextTick } from 'vue'
import { EVENT_ROOT_CONTENT_DISMISS } from './utils'
import { Primitive, type PrimitiveProps } from '@/Primitive'

// const LINK_SELECT = "navigationMenu.linkSelect";

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  as: 'a',
})
const emits = defineEmits<NavigationMenuLinkEmits>()

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
