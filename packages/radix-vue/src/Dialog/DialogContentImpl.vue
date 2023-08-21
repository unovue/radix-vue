<script setup lang="ts">
import { inject } from 'vue'
import { DIALOG_INJECTION_KEY } from './DialogRoot.vue'
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

export interface DialogContentImplEmits extends DismissableLayerEmits {
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  (e: 'openAutoFocus', event: Event): void
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  (e: 'closeAutoFocus', event: Event): void
}

const props = defineProps<DialogContentImplProps>()
const emits = defineEmits<DialogContentImplEmits>()

const context = inject(DIALOG_INJECTION_KEY)
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
      :id="context!.contentId"
      :as="as"
      :as-child="asChild"
      :disable-outside-pointer-events="disableOutsidePointerEvents"
      role="dialog"
      :aria-describedby="context!.descriptionId"
      :aria-labelledby="context!.titleId"
      :data-state="getOpenState(context!.open.value)"
      @dismiss="context?.onOpenChange(false)"
    >
      <slot />
    </DismissableLayer>
  </FocusScope>
</template>
