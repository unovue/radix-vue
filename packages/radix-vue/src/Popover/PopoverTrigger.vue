<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { POPOVER_INJECTION_KEY } from './PopoverRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { PopperAnchor } from '@/Popper'

export interface PopoverTriggerProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: 'button',
})

const context = inject(POPOVER_INJECTION_KEY)

const { primitiveElement, currentElement: triggerElement }
  = usePrimitiveElement()

onMounted(() => {
  context!.triggerElement.value = triggerElement.value
})

defineExpose({ $el: triggerElement })
</script>

<template>
  <component
    :is="context?.hasCustomAnchor.value ? Primitive : PopperAnchor"
    as-child
  >
    <Primitive
      ref="primitiveElement"
      :type="as === 'button' ? 'button' : undefined"
      aria-haspopup="dialog"
      :aria-expanded="context?.open.value"
      :aria-controls="context?.contentId"
      :data-state="context?.open.value ? 'open' : 'closed'"
      :as="as"
      :as-child="props.asChild"
      @click="context!.onOpenToggle"
    >
      <slot />
    </Primitive>
  </component>
</template>
