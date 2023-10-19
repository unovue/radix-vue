<script setup lang="ts">
import DialogContentModal from './DialogContentModal.vue'
import DialogContentNonModal from './DialogContentNonModal.vue'
import {
  type DialogContentImplEmits,
  type DialogContentImplProps,
} from './DialogContentImpl.vue'
import { injectDialogRootContext } from './DialogRoot.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

const props = defineProps<DialogContentProps>()

const emits = defineEmits<DialogContentEmits>()

const rootContext = injectDialogRootContext()

export interface DialogContentProps extends DialogContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
export type DialogContentEmits = DialogContentImplEmits

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="forceMount || rootContext.open.value">
    <DialogContentModal
      v-if="rootContext.modal.value"
      v-bind="{ ...props, ...emitsAsProps, ...$attrs }"
      @open-auto-focus="emits('openAutoFocus', $event)"
    >
      <slot />
    </DialogContentModal>
    <DialogContentNonModal
      v-else
      v-bind="{ ...props, ...emitsAsProps, ...$attrs }"
    >
      <slot />
    </DialogContentNonModal>
  </Presence>
</template>
