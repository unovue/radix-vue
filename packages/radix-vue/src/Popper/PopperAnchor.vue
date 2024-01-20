<script lang="ts">
import type { Measurable } from './PopperRoot.vue'
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface PopperAnchorProps extends PrimitiveProps {
  element?: Measurable
}
</script>

<script setup lang="ts">
import { watch } from 'vue'
import { injectPopperRootContext } from './PopperRoot.vue'
import {
  Primitive,
} from '@/Primitive'

const props = defineProps<PopperAnchorProps>()

const { forwardRef, currentElement } = useForwardExpose()

const rootContext = injectPopperRootContext()

watch(currentElement, () => {
  rootContext.onAnchorChange(props.element ?? currentElement.value)
})
</script>

<template>
  <Primitive :ref="forwardRef" :as="as" :as-child="asChild">
    <slot />
  </Primitive>
</template>
