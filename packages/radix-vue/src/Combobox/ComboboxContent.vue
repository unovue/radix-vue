<script lang="ts">
import type { ComboboxContentImplEmits, ComboboxContentImplProps } from './ComboboxContentImpl.vue'

export type ComboboxContentEmits = ComboboxContentImplEmits
export interface ComboboxContentProps extends ComboboxContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import ComboboxContentImpl from './ComboboxContentImpl.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits, useForwardRef } from '@/shared'

const props = defineProps<ComboboxContentProps>()
const emits = defineEmits<ComboboxContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
const { forwardRef } = useForwardRef()

const rootContext = injectComboboxRootContext()
</script>

<template>
  <Presence :present="forceMount || rootContext.open.value">
    <ComboboxContentImpl v-bind="{ ...forwarded, ...$attrs }" :ref="forwardRef">
      <slot />
    </ComboboxContentImpl>
  </Presence>
</template>
