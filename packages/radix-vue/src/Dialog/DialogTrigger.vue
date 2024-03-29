<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DialogTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectDialogRootContext } from './DialogRoot.vue'
import { useForwardExpose, useId } from '@/shared'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  as: 'button',
})
const rootContext = injectDialogRootContext()
const { forwardRef, currentElement } = useForwardExpose()

rootContext.contentId ||= useId(undefined, 'radix-vue-dialog-content')
onMounted(() => {
  rootContext.triggerElement = currentElement
})
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    :type="as === 'button' ? 'button' : undefined"
    aria-haspopup="dialog"
    :aria-expanded="rootContext.open.value || false"
    :aria-controls="rootContext.open.value ? rootContext.contentId : undefined"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    @click="rootContext.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
