<script lang="ts">
import type {
  MenuContentEmits,
  MenuContentProps,
} from '@/Menu'

export type DropdownMenuContentEmits = MenuContentEmits

export interface DropdownMenuContentProps extends MenuContentProps {}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { injectDropdownMenuRootContext } from './DropdownMenuRoot.vue'
import { MenuContent } from '@/Menu'
import { useForwardExpose, useForwardPropsEmits, useId } from '@/shared'

const props = defineProps<DropdownMenuContentProps>()
const emits = defineEmits<DropdownMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
useForwardExpose()

const rootContext = injectDropdownMenuRootContext()

const hasInteractedOutsideRef = ref(false)

function handleCloseAutoFocus(event: Event) {
  if (event.defaultPrevented)
    return
  if (!hasInteractedOutsideRef.value) {
    setTimeout(() => {
      rootContext.triggerElement.value?.focus()
    }, 0)
  }
  hasInteractedOutsideRef.value = false

  // Always prevent auto focus because we either focus manually or want user agent focus
  event.preventDefault()
}

rootContext.contentId ||= useId(undefined, 'radix-vue-dropdown-menu-content')
</script>

<template>
  <MenuContent
    v-bind="forwarded"
    :id="rootContext.contentId"
    :aria-labelledby="rootContext?.triggerId"
    :style="{
      '--radix-dropdown-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-dropdown-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-dropdown-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-dropdown-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-dropdown-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
    @close-auto-focus="handleCloseAutoFocus"
    @interact-outside="(event) => {
      if (event.defaultPrevented) return

      const originalEvent = event.detail.originalEvent as PointerEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!rootContext.modal.value || isRightClick) hasInteractedOutsideRef = true;
      if (rootContext.triggerElement.value?.contains(event.target as HTMLElement)) event.preventDefault()
    }"
  >
    <slot />
  </MenuContent>
</template>
