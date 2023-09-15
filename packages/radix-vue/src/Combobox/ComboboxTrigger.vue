<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed, inject } from 'vue'
import { COMBOBOX_INJECT_KEY } from './ComboboxRoot.vue'

export interface ComboboxTriggerProps extends PrimitiveProps {
  disabled?: boolean
}

const props = withDefaults(defineProps<ComboboxTriggerProps>(), {
  as: 'button',
})

const context = inject(COMBOBOX_INJECT_KEY)
const disabled = computed(() => props.disabled || context?.disabled.value || false)
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    v-bind="props"
    tabindex="-1"
    aria-label="Show popup"
    aria-haspopup="listbox"
    :aria-expanded="context?.open.value"
    :aria-controls="context?.contentId"
    :disabled="disabled"
    :aria-disabled="disabled ?? undefined"
    @click="context?.onOpenChange(!context.open.value)"
  >
    <slot />
  </Primitive>
</template>
