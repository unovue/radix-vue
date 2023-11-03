<script lang="ts">
import DialogOverlayImpl, { type DialogOverlayImplProps } from './DialogOverlayImpl.vue'

export interface DialogOverlayProps extends DialogOverlayImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Presence } from '@/Presence'

defineProps<DialogOverlayProps>()
const rootContext = injectDialogRootContext()
</script>

<template>
  <Presence v-if="rootContext?.modal.value" :present="forceMount || rootContext.open.value">
    <DialogOverlayImpl :as="as" :as-child="asChild" v-bind="$attrs">
      <slot />
    </DialogOverlayImpl>
  </Presence>
</template>
