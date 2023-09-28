<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'
import ComboboxContentImpl, { type ComboboxContentImplEmits, type ComboboxContentImplProps } from './ComboboxContentImpl.vue'
import { Presence } from '@/Presence'
import { useForwardPropsEmits } from '@/shared'

export interface ComboboxContentProps extends ComboboxContentImplProps {}
export type ComboboxContentEmits = ComboboxContentImplEmits

const props = defineProps<ComboboxContentProps>()
const emits = defineEmits<ComboboxContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)

const context = inject(COMBOBOX_INJECT_KEY)
</script>

<template>
  <Presence :present="context!.open.value">
    <ComboboxContentImpl v-bind="{ ...forwarded, ...$attrs }">
      <slot />
    </ComboboxContentImpl>
  </Presence>
</template>
