<script setup lang="ts">
import { injectComboboxRootContext } from './ComboboxRoot.vue'
import ComboboxContentImpl, { type ComboboxContentImplEmits, type ComboboxContentImplProps } from './ComboboxContentImpl.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits } from '@/shared'

export interface ComboboxContentProps extends ComboboxContentImplProps {}
export type ComboboxContentEmits = ComboboxContentImplEmits

const props = defineProps<ComboboxContentProps>()
const emits = defineEmits<ComboboxContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const rootContext = injectComboboxRootContext()
</script>

<template>
  <Presence :present="rootContext.open.value">
    <ComboboxContentImpl v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </ComboboxContentImpl>
  </Presence>
</template>
