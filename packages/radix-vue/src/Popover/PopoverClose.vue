<script setup lang="ts">
import {
  injectPopoverRootContext,
} from './PopoverRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: 'button',
})

const rootContext = injectPopoverRootContext()

export interface PopoverCloseProps extends PrimitiveProps {}
</script>

<template>
  <Primitive
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="props.asChild"
    @click="rootContext.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
