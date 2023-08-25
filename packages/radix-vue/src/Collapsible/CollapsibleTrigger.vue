<script lang="ts">
export interface CollapsibleTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { Primitive, type PrimitiveProps } from '../Primitive'
import { COLLAPSIBLE_INJECTION_KEY } from './CollapsibleRoot.vue'

const props = withDefaults(defineProps<CollapsibleTriggerProps>(), {
  as: 'button',
})

const injectedValue = inject(COLLAPSIBLE_INJECTION_KEY)
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="props.asChild"
    :aria-controls="injectedValue?.contentId"
    :aria-expanded="injectedValue?.open.value || false"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? '' : undefined"
    :disabled="injectedValue?.disabled?.value"
    @click="injectedValue?.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
