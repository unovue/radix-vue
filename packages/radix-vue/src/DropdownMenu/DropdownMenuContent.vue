<script setup lang="ts">
import { ref } from 'vue'
import { injectDropdownMenuContext } from './DropdownMenuRoot.vue'
import {
  MenuContent,
  type MenuContentEmits,
  type MenuContentProps,
} from '@/Menu'
import { useEmitAsProps } from '@/shared'
import { PopperContentPropsDefaultValue } from '@/Popper'

export interface DropdownMenuContentProps extends MenuContentProps {}
export type DropdownMenuContentEmits = MenuContentEmits

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
  ...PopperContentPropsDefaultValue,
})
const emits = defineEmits<DropdownMenuContentEmits>()

const context = injectDropdownMenuContext()

const hasInteractedOutsideRef = ref(false)

const emitsAsProps = useEmitAsProps(emits)

function handleCloseAutoFocus(event: Event) {
  emits('closeAutoFocus', event)
  if (event.defaultPrevented)
    return
  if (!hasInteractedOutsideRef.value) {
    setTimeout(() => {
      context.triggerElement.value?.focus()
    }, 0)
  }
  hasInteractedOutsideRef.value = false

  // Always prevent auto focus because we either focus manually or want user agent focus
  event.preventDefault()
}
</script>

<template>
  <MenuContent
    v-bind="{ ...props, ...emitsAsProps }"
    :id="context.contentId"
    :aria-labelledby="context.triggerId"
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
      emits('interactOutside', event)
      if (event.defaultPrevented) return
      const originalEvent = event.detail.originalEvent as PointerEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (!context.modal.value || isRightClick) hasInteractedOutsideRef = true;
    }"
  >
    <slot />
  </MenuContent>
</template>
