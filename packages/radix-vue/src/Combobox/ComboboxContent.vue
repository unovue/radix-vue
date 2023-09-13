<script setup lang="ts">
import { inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'
import ComboboxContentImpl, { type ComboboxContentImplEmits, type ComboboxContentImplProps } from './ComboboxContentImpl.vue'
import { Presence } from '@/Presence'
import { useEmitAsProps } from '@/shared'

export interface ComboboxContentProps extends ComboboxContentImplProps {}
export type ComboboxContentEmits = ComboboxContentImplEmits

const props = withDefaults(defineProps<ComboboxContentProps>(), {
  position: 'inline',
})

const emits = defineEmits<ComboboxContentEmits>()

const context = inject(COMBOBOX_INJECT_KEY)
</script>

<template>
  <Presence :present="context!.open.value">
    <ComboboxContentImpl v-bind="{ ...props, ...useEmitAsProps(emits), ...$attrs }">
      <slot />
    </ComboboxContentImpl>
  </Presence>
</template>
