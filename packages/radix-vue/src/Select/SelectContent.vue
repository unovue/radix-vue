<script lang="ts">
import type {
  SelectContentImplEmits,
  SelectContentImplProps,
} from './SelectContentImpl.vue'

export type SelectContentEmits = SelectContentImplEmits

export interface SelectContentProps extends SelectContentImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import SelectContentImpl from './SelectContentImpl.vue'
import { injectSelectRootContext } from './SelectRoot.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits } from '@/shared'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SelectContentProps>()

const emits = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const rootContext = injectSelectRootContext()
</script>

<template>
  <Presence
    :present="props.forceMount || rootContext.open.value"
  >
    <SelectContentImpl v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </SelectContentImpl>
  </Presence>
</template>
