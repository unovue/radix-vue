<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DialogCloseProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { useForwardExpose } from '@/shared'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<DialogCloseProps>(), {
  as: 'button',
})

useForwardExpose()
const rootContext = injectDialogRootContext()
</script>

<template>
  <Primitive
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    @click="rootContext.onOpenChange(false)"
  >
    <slot />
  </Primitive>
</template>
