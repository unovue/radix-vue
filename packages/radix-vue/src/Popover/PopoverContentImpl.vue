<script setup lang="ts">
import { injectPopoverContext } from './PopoverRoot.vue'
import { PopperContent, type PopperContentProps } from '@/Popper'
import {
  DismissableLayer,
  type DismissableLayerEmits,
  type DismissableLayerProps,
} from '@/DismissableLayer'
import { FocusScope, type FocusScopeProps } from '@/FocusScope'
import { useFocusGuards } from '@/shared'

export interface PopoverContentImplProps
  extends PopperContentProps,
  DismissableLayerProps {
  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps['trapped']
}

export type PopoverContentImplEmits = DismissableLayerEmits & {
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  'openAutoFocus': [event: Event]
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  'closeAutoFocus': [event: Event]
}

const props = defineProps<PopoverContentImplProps>()
const emits = defineEmits<PopoverContentImplEmits>()

const context = injectPopoverContext()
useFocusGuards()
</script>

<template>
  <FocusScope
    as-child
    loop
    :trapped="trapFocus"
    @mount-auto-focus="emits('openAutoFocus', $event)"
    @unmount-auto-focus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      as-child
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @focus-outside="emits('focusOutside', $event)"
      @dismiss="context.onOpenChange(false)"
    >
      <PopperContent
        v-bind="props"
        :id="context.contentId"
        :data-state="context.open.value ? 'open' : 'closed'"
        role="dialog"
        :style="{
          '--radix-popover-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-popover-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-popover-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-popover-trigger-width': 'var(--radix-popper-anchor-width)',
          '--radix-popover-trigger-height': 'var(--radix-popper-anchor-height)',
        }"
      >
        <slot />
      </PopperContent>
    </DismissableLayer>
  </FocusScope>
</template>
