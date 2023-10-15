<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { computed } from 'vue'
import { injectComboboxRootContext } from './ComboboxRoot.vue'

export interface ComboboxTriggerProps extends PrimitiveProps {
  disabled?: boolean
}

const props = withDefaults(defineProps<ComboboxTriggerProps>(), {
  as: 'button',
})

const rootContext = injectComboboxRootContext()
const disabled = computed(() => props.disabled || rootContext.disabled.value || false)
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    v-bind="props"
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
