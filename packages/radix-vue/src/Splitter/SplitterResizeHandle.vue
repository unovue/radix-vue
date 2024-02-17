<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import type { PointerHitAreaMargins, ResizeHandlerAction, ResizeHandlerState } from './resize'
import type { ResizeEvent } from './utils'

export interface SplitterResizeHandleProps extends PrimitiveProps {
  disabled?: boolean
  hitAreaMargins?: PointerHitAreaMargins
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardExpose, useId, useStateMachine } from '@/shared'
import { injectSplitterGroupContext } from './SplitterGroup.vue'
import { registerResizeHandle } from './resize'
import { ref, watchEffect } from 'vue'

const props = defineProps<SplitterResizeHandleProps>()
const resizeHandleId = useId()
const groupContext = injectSplitterGroupContext()
const { forwardRef, currentElement } = useForwardExpose()

const state = ref<ResizeHandlerState>('inactive')
const isFocused = ref(false)

const { dispatch } = useStateMachine('idle', {
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

const resizeHandler = '123'
watchEffect((onCleanup) => {
  if (props.disabled || resizeHandler == null)
    return

  const element = currentElement.value
  console.log(element)
  if (!element)
    return

  const setResizeHandlerState = (
    action: ResizeHandlerAction,
    isActive: boolean,
    event: ResizeEvent,
  ) => {
    if (isActive) {
      switch (action) {
        case 'down': {
          state.value = 'drag'

          groupContext.startDragging(resizeHandleId, event)
          groupContext.isDragging.value = true

          // const { onDragging } = callbacksRef.current
          // if (onDragging)
          //   onDragging(true)

          break
        }
        case 'move': {
          // const { state } = committedValuesRef.current

          // if (state !== 'drag')
          //   state.value = 'hover'

          // resizeHandler(event)
          break
        }
        case 'up': {
          state.value = 'hover'

          groupContext.stopDragging()

          // const { onDragging } = callbacksRef.current
          // if (onDragging)
          //   onDragging(false)

          break
        }
      }
    }
    else {
      state.value = 'inactive'
    }
  }

  registerResizeHandle(
    resizeHandleId,
    element,
    groupContext.direction.value,
    {
      // Coarse inputs (e.g. finger/touch)
      coarse: props.hitAreaMargins?.coarse ?? 15,
      // Fine inputs (e.g. mouse)
      fine: props.hitAreaMargins?.fine ?? 5,
    },
    setResizeHandlerState,
  )
})
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    role="separator"
    tabindex="0"
    :style="{
      touchAction: 'none',
      userSelect: 'none',
    }"
    :data-state="groupContext.isDragging.value ? 'active' : 'inactive'"
    :disabled="disabled"
    @focus="isFocused = true"
    @blur="isFocused = false"
    @pointerdown="groupContext.startDragging"
  >
    <slot />
  </Primitive>
</template>
