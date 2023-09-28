<script setup lang="ts">
import { inject } from 'vue'
import PopoverContentModal from './PopoverContentModal.vue'
import PopoverContentNonModal from './PopoverContentNonModal.vue'
import {
  type PopoverContentImplEmits,
  type PopoverContentImplProps,
} from './PopoverContentImpl.vue'
import { POPOVER_INJECTION_KEY } from './PopoverRoot.vue'
import { useForwardPropsEmits } from '@/shared'
import { Presence } from '@/Presence'

export interface PopoverContentProps extends PopoverContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true
}
export type PopoverContentEmits = PopoverContentImplEmits

const props = defineProps<PopoverContentProps>()
const emits = defineEmits<PopoverContentEmits>()

const context = inject(POPOVER_INJECTION_KEY)

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Presence :present="forceMount || context!.open.value">
    <PopoverContentModal
      v-if="context?.modal.value"
      v-bind="forwarded"
    >
      <slot />
    </PopoverContentModal>
    <PopoverContentNonModal v-else v-bind="forwarded">
      <slot />
    </PopoverContentNonModal>
  </Presence>
</template>
