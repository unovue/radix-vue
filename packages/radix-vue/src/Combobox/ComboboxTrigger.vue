<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxTriggerProps extends PrimitiveProps {
  disabled?: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardRef } from '@/shared'
import { computed } from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

const props = withDefaults(defineProps<ComboboxTriggerProps>(), {
  as: 'button',
})

const { forwardRef } = useForwardRef()
const rootContext = injectComboboxRootContext()
const disabled = computed(() => props.disabled || rootContext.disabled.value || false)
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    :type="as === 'button' ? 'button' : undefined"
    tabindex="-1"
    aria-label="Show popup"
    aria-haspopup="listbox"
    :aria-expanded="rootContext.open.value"
    :aria-controls="rootContext.contentId"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    :disabled="disabled"
    :data-disabled="disabled"
    :aria-disabled="disabled ?? undefined"
    @click="rootContext.onOpenChange(!rootContext.open.value)"
  >
    <slot />
  </Primitive>
</template>
