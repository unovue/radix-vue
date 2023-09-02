<script setup lang="ts">
import DialogContentModal from './DialogContentModal.vue'
import DialogContentNonModal from './DialogContentNonModal.vue'
import {
  type DialogContentImplEmits,
  type DialogContentImplProps,
} from './DialogContentImpl.vue'
import { injectDialogContext } from './DialogRoot.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

const props = defineProps<DialogContentProps>()

const emits = defineEmits<DialogContentEmits>()

const context = injectDialogContext()

export interface DialogContentProps extends DialogContentImplProps {}
export type DialogContentEmits = DialogContentImplEmits

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <Presence :present="context.open.value">
    <DialogContentModal
      v-if="context.modal.value"
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
