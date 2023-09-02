<script setup lang="ts">
import { injectDialogContext } from './DialogRoot.vue'
import {
  DismissableLayer,
  type DismissableLayerEmits,
  type DismissableLayerProps,
} from '@/DismissableLayer'
import { FocusScope } from '@/FocusScope'
import { getOpenState } from '@/Menu/utils'

export interface DialogContentImplProps extends DismissableLayerProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling transntion with Vue native transition or other animation libraries.
   */
  forceMount?: boolean
  /**
   * When `true`, focus cannot escape the `Content` via keyboard,
   * pointer, or a programmatic focus.
   * @defaultValue false
   */
  trapFocus?: boolean
}

export type DialogContentImplEmits = DismissableLayerEmits & {
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  'openAutoFocus': [event: Event]
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  'closeAutoFocus': [ event: Event]
}

const props = defineProps<DialogContentImplProps>()
const emits = defineEmits<DialogContentImplEmits>()

const context = injectDialogContext()
</script>

<template>
  <FocusScope
    as-child
    loop
    :trapped="props.trapFocus"
    @mount-auto-focus="emits('openAutoFocus', $event)"
    @unmount-auto-focus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      v-bind="$attrs"
      :id="context.contentId"
      :as="as"
      :as-child="asChild"
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      role="dialog"
      :aria-describedby="context.descriptionId"
      :aria-labelledby="context.titleId"
      :data-state="getOpenState(context.open.value)"
      @dismiss="context.onOpenChange(false)"
      @escape-key-down="emits('escapeKeyDown', $event)"
      @focus-outside="emits('focusOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
    >
      <slot />
    </DismissableLayer>
  </FocusScope>
</template>
