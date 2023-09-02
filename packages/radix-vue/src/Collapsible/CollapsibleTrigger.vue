<script lang="ts">
export interface CollapsibleTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '../Primitive'
import { injectCollapsibleContext } from './CollapsibleRoot.vue'

const props = withDefaults(defineProps<CollapsibleTriggerProps>(), {
  as: 'button',
})

const context = injectCollapsibleContext()
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="props.asChild"
    :aria-controls="context.contentId"
    :aria-expanded="context.open.value || false"
    :data-state="context.open.value ? 'open' : 'closed'"
    :data-disabled="context.disabled?.value ? '' : undefined"
    :disabled="context.disabled?.value"
    @click="context.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
