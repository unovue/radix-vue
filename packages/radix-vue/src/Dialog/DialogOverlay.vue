<script setup lang="ts">
import { watch } from 'vue'
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { Presence } from '@/Presence'
import { useBodyScrollLock } from '@/shared'

export interface DialogOverlayProps extends PrimitiveProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling transntion with Vue native transition or other animation libraries.
   */
  forceMount?: boolean
}

defineProps<DialogOverlayProps>()
const rootContext = injectDialogRootContext()

const isLocked = useBodyScrollLock()
watch(
  rootContext.open,
  isOpen => (isLocked.value = isOpen),
)
</script>

<template>
  <Presence v-if="rootContext?.modal.value" :present="forceMount || rootContext.open.value">
    <Primitive
      v-bind="$attrs"
      :as="as"
      :as-child="asChild"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      style="pointer-events: auto"
      data-aria-hidden="true"
      aria-hidden="true"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
