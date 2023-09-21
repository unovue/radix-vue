<script setup lang="ts">
import { Primitive } from '@/Primitive'
import type { PrimitiveProps } from '@/Primitive'
import ToastAnnounceExclude from './ToastAnnounceExclude.vue'
import { TOAST_INTERACTIVE_CONTEXT } from './ToastImpl.vue'
import { inject } from 'vue'

export interface ToastCloseProps extends PrimitiveProps {}
const props = withDefaults(defineProps<ToastCloseProps>(), {
  as: 'button',
})

const interactiveContext = inject(TOAST_INTERACTIVE_CONTEXT)
</script>

<template>
  <ToastAnnounceExclude as-child>
    <Primitive
      v-bind="props"
      :type="as === 'button' ? 'button' : undefined "
      @click="interactiveContext?.onClose()"
    >
      <slot />
    </Primitive>
  </ToastAnnounceExclude>
</template>
