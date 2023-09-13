<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxTriggerProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ComboboxTriggerProps>(), {
  as: 'button',
})

const context = inject(COMBOBOX_INJECT_KEY)
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    v-bind="props"
    tabindex="-1"
    aria-haspopup="listbox"
    :aria-expanded="context?.open.value"
    :aria-controls="context?.contentId"
    @click="context?.onOpenChange(!context.open.value)"
  >
    <slot />
  </Primitive>
</template>
