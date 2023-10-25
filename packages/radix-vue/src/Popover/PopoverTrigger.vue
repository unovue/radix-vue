<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface PopoverTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { onMounted } from 'vue'
import { injectPopoverRootContext } from './PopoverRoot.vue'
import {
  Primitive,
  usePrimitiveElement,
} from '@/Primitive'
import { PopperAnchor } from '@/Popper'

const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: 'button',
})

const rootContext = injectPopoverRootContext()

const { primitiveElement, currentElement: triggerElement }
  = usePrimitiveElement()

onMounted(() => {
  rootContext.triggerElement.value = triggerElement.value
})

defineExpose({ $el: triggerElement })
</script>

<template>
  <component
    :is="rootContext.hasCustomAnchor.value ? Primitive : PopperAnchor"
    as-child
  >
    <Primitive
      ref="primitiveElement"
      :type="as === 'button' ? 'button' : undefined"
      aria-haspopup="dialog"
      :aria-expanded="rootContext.open.value"
      :aria-controls="rootContext.contentId"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      :as="as"
      :as-child="props.asChild"
      @click="rootContext.onOpenToggle"
    >
      <slot />
    </Primitive>
  </component>
</template>
