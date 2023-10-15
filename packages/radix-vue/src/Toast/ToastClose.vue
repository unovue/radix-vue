<script setup lang="ts">
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'
import ToastAnnounceExclude from './ToastAnnounceExclude.vue'
import { injectToastRootContext } from './ToastRootImpl.vue'

export interface ToastCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ToastCloseProps>(), {
  as: 'button',
})

const rootContext = injectToastRootContext()
</script>

<template>
  <ToastAnnounceExclude as-child>
    <Primitive
      v-bind="props"
      :type="as === 'button' ? 'button' : undefined "
      @click="rootContext.onClose()"
    >
      <slot />
    </Primitive>
  </ToastAnnounceExclude>
</template>
