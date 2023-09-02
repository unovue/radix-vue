<script setup lang="ts">
import { onMounted } from 'vue'
import { injectDialogContext } from './DialogRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

export interface DialogTriggerProps extends PrimitiveProps {}

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  as: 'button',
})
const context = injectDialogContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

onMounted(() => {
  context.triggerElement = currentElement
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-haspopup="dialog"
    :aria-expanded="context.open.value"
    :aria-controls="context.contentId"
    :data-state="context.open.value ? 'open' : 'closed'"
    @click="context.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
