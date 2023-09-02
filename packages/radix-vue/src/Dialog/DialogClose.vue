<script setup lang="ts">
import { injectDialogContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogCloseProps>(), {
  as: 'button',
})

const context = injectDialogContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-label="Close"
    @click="context.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
