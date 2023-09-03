<script setup lang="ts">
import { watch } from 'vue'
import { type Measurable, injectPopperContext } from './PopperRoot.vue'
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

const context = injectPopperContext()

watch(currentElement, () => {
  context.onAnchorChange(props.element ?? currentElement.value)
})
</script>

<template>
  <Primitive ref="primitiveElement" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
