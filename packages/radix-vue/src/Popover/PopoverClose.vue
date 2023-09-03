<script setup lang="ts">
import {
  injectPopoverContext,
} from './PopoverRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: 'button',
})

const context = injectPopoverContext()

export interface PopoverCloseProps extends PrimitiveProps {}
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="props.asChild"
    @click="context.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
