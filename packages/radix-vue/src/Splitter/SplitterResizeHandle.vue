<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { DataOrientation } from '@/shared/types'
import { useId, useStateMachine } from '..'

export interface SplitterResizeHandleProps extends PrimitiveProps {
  direction?: DataOrientation
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { ref, watchEffect } from 'vue'

const props = defineProps<SplitterResizeHandleProps>()
const resizeHandleId = useId()

const isFocused = ref(false)

const { state, dispatch } = useStateMachine('idle', {
  hidden: {
    SCROLL: 'scrolling',
  },
  scrolling: {
    SCROLL_END: 'idle',
    POINTER_ENTER: 'interacting',
  },
  interacting: {
    SCROLL: 'interacting',
    POINTER_LEAVE: 'idle',
  },
  idle: {
    HIDE: 'hidden',
    SCROLL: 'scrolling',
    POINTER_ENTER: 'interacting',
  },
})

watchEffect(() => {
  // if (state.value === 'idle') {
  //   window.setTimeout(
  //     () => dispatch('HIDE'),
  //     rootContext.scrollHideDelay.value,
  //   )
  // }
})
</script>

<template>
  <Primitive
    v-bind="props"
    role="separator"
    tabindex="0"
    :style="{
      touchAction: 'none',
      userSelect: 'none',
    }"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <slot />
  </Primitive>
</template>
