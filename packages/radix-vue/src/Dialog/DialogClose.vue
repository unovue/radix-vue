<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

export interface DialogCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<DialogCloseProps>(), {
  as: 'button',
})

const rootContext = injectDialogRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-label="Close"
    @click="rootContext.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
