<script setup lang="ts">
import { ref } from 'vue'
import { injectContextMenuContext } from './ContextMenuRoot.vue'
import {
  MenuContent,
  type MenuContentEmits,
  type MenuContentProps,
} from '@/Menu'

export interface ContextMenuContentProps
  extends Omit<
    MenuContentProps,
    | 'side'
    | 'sideOffset'
    | 'align'
    | 'arrowPadding'
    | 'updatePositionStrategy'
    | 'prioritizePosition'
  > {}
export type ContextMenuContentEmits = MenuContentEmits

const props = withDefaults(defineProps<ContextMenuContentProps>(), {
  alignOffset: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: 'partial',
  hideWhenDetached: false,
})
const emits = defineEmits<ContextMenuContentEmits>()

const context = injectContextMenuContext()
const hasInteractedOutside = ref(false)
</script>

<template>
  <MenuContent
    v-bind="props"
    side="right"
    :side-offset="2"
    align="start"
    :style="{
      '--radix-context-menu-content-transform-origin':
        'var(--radix-popper-transform-origin)',
      '--radix-context-menu-content-available-width':
        'var(--radix-popper-available-width)',
      '--radix-context-menu-content-available-height':
        'var(--radix-popper-available-height)',
      '--radix-context-menu-trigger-width': 'var(--radix-popper-anchor-width)',
      '--radix-context-menu-trigger-height':
        'var(--radix-popper-anchor-height)',
    }"
    @close-auto-focus="
      (event) => {
        emits('closeAutoFocus', event);

        if (!event.defaultPrevented && hasInteractedOutside) {
          event.preventDefault();
        }
        hasInteractedOutside = false;
      }
    "
    @interact-outside="
      (event) => {
        emits('interactOutside', event);
        if (!event.defaultPrevented && !context.modal.value)
          hasInteractedOutside = true;
      }
    "
  >
    <slot />
  </MenuContent>
</template>
