<script setup lang="ts">
import { inject, watch } from 'vue'
import { type Measurable, POPPER_ROOT_KEY } from './PopperRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'

export interface PopperAnchorProps extends PrimitiveProps {
  element?: Measurable
}

const props = defineProps<PopperAnchorProps>()

const { primitiveElement, currentElement } = usePrimitiveElement()

const context = inject(POPPER_ROOT_KEY)

watch(currentElement, () => {
  context?.onAnchorChange(props.element ?? currentElement.value)
})
</script>

<template>
  <Primitive ref="primitiveElement" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
