<script lang="ts">
export interface RadioGroupIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectRadioGroupItemContext } from './RadioGroupItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

withDefaults(defineProps<RadioGroupIndicatorProps>(), {
  as: 'span',
})

const itemContext = injectRadioGroupItemContext()
</script>

<template>
  <Primitive
    v-if="itemContext.checked.value"
    :data-state="itemContext.checked.value ? 'checked' : 'unchecked'"
    :data-disabled="itemContext.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
