<script lang="ts">
import type { Measurable } from './PopperRoot.vue'
import type { PrimitiveProps } from '@/Primitive'

export interface PopperAnchorProps extends PrimitiveProps {
  element?: Measurable
}
</script>

<script setup lang="ts">
import { watch } from 'vue'
import { injectPopperRootContext } from './PopperRoot.vue'
import {
  Primitive,
  usePrimitiveElement,
} from '@/Primitive'

const props = defineProps<PopperAnchorProps>()

const { primitiveElement, currentElement } = usePrimitiveElement()

const rootContext = injectPopperRootContext()

watch(currentElement, () => {
  rootContext.onAnchorChange(props.element ?? currentElement.value)
})
</script>

<template>
  <Primitive ref="primitiveElement" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
