<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DialogTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectDialogRootContext } from './DialogRoot.vue'
import { Primitive, usePrimitiveElement } from '@/Primitive'

const props = withDefaults(defineProps<DialogTriggerProps>(), {
  as: 'button',
})
const rootContext = injectDialogRootContext()
const { primitiveElement, currentElement } = usePrimitiveElement()

onMounted(() => {
  rootContext.triggerElement = currentElement
})
</script>

<template>
  <Primitive
    ref="primitiveElement"
    v-bind="props"
    :type="as === 'button' ? 'button' : undefined"
    aria-haspopup="dialog"
    :aria-expanded="rootContext.open.value || false"
    :aria-controls="rootContext.contentId"
    :data-state="rootContext.open.value ? 'open' : 'closed'"
    @click="rootContext.onOpenToggle"
  >
    <slot />
  </Primitive>
</template>
