<script setup lang="ts">
import PopoverContentModal from './PopoverContentModal.vue'
import PopoverContentNonModal from './PopoverContentNonModal.vue'
import {
  type PopoverContentImplEmits,
  type PopoverContentImplProps,
} from './PopoverContentImpl.vue'
import { injectPopoverRootContext } from './PopoverRoot.vue'
import { useForwardPropsEmits } from '@/shared'
import { Presence } from '@/Presence'

export interface PopoverContentProps extends PopoverContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
export type PopoverContentEmits = PopoverContentImplEmits

const props = defineProps<PopoverContentProps>()
const emits = defineEmits<PopoverContentEmits>()

const rootContext = injectPopoverRootContext()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Presence :present="forceMount || rootContext.open.value">
    <PopoverContentModal
      v-if="rootContext.modal.value"
      v-bind="forwarded"
    >
      <slot />
    </PopoverContentModal>
    <PopoverContentNonModal v-else v-bind="forwarded">
      <slot />
    </PopoverContentNonModal>
  </Presence>
</template>
