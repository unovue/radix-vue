<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardRef } from '@/shared'

export interface RadioGroupIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectRadioGroupItemContext } from './RadioGroupItem.vue'
import { Primitive } from '@/Primitive'

withDefaults(defineProps<RadioGroupIndicatorProps>(), {
  as: 'span',
})

const { forwardRef } = useForwardRef()
const itemContext = injectRadioGroupItemContext()
</script>

<template>
  <Primitive
    v-if="itemContext.checked.value"
    :ref="forwardRef"
    :data-state="itemContext.checked.value ? 'checked' : 'unchecked'"
    :data-disabled="itemContext.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
