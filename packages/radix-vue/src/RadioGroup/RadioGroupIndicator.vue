<script lang="ts">
export interface RadioGroupIndicatorProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { RADIO_GROUP_ITEM_INJECTION_KEY } from './RadioGroupItem.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

withDefaults(defineProps<RadioGroupIndicatorProps>(), {
  as: 'span',
})

const itemContext = inject(RADIO_GROUP_ITEM_INJECTION_KEY)
</script>

<template>
  <Primitive
    v-if="itemContext?.checked.value"
    :data-state="itemContext?.checked.value ? 'checked' : 'unchecked'"
    :data-disabled="itemContext?.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
