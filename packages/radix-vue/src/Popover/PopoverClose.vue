<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface PopoverCloseProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import {
  injectPopoverRootContext,
} from './PopoverRoot.vue'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<PopoverCloseProps>(), {
  as: 'button',
})

useForwardExpose()
const rootContext = injectPopoverRootContext()
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
