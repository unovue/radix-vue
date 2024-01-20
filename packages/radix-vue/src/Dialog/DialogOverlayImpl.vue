<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DialogOverlayImplProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive } from '@/Primitive'
import { useBodyScrollLock, useForwardRef } from '@/shared'

defineProps<DialogOverlayImplProps>()
const rootContext = injectDialogRootContext()

useBodyScrollLock(true)
const { forwardRef } = useForwardRef()
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    style="pointer-events: auto"
  >
    <slot />
  </Primitive>
</template>
