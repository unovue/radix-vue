<script setup lang="ts">
import { watchEffect } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { useStateMachine } from '../shared/useStateMachine'
import { injectScrollAreaRootContext } from './ScrollAreaRoot.vue'
import { injectScrollAreaScrollbarContext } from './ScrollAreaScrollbar.vue'
import ScrollAreaScrollbarVisible from './ScrollAreaScrollbarVisible.vue'

const rootContext = injectScrollAreaRootContext()
const scrollbarContext = injectScrollAreaScrollbarContext()

const { state, dispatch } = useStateMachine('hidden', {
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
  if (state.value === 'idle') {
    window.setTimeout(
      () => dispatch('HIDE'),
      rootContext.scrollHideDelay.value,
    )
  }
})

const debounceScrollEnd = useDebounceFn(() => dispatch('SCROLL_END'), 100)

watchEffect(() => {
  const viewport = rootContext.viewport.value
  const scrollDirection = scrollbarContext.isHorizontal.value
    ? 'scrollLeft'
    : 'scrollTop'

  if (viewport) {
    let prevScrollPos = viewport[scrollDirection]
    const handleScroll = () => {
      const scrollPos = viewport[scrollDirection]
      const hasScrollInDirectionChanged = prevScrollPos !== scrollPos
      if (hasScrollInDirectionChanged) {
        dispatch('SCROLL')
        debounceScrollEnd()
      }
      prevScrollPos = scrollPos
    }
    viewport.addEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <ScrollAreaScrollbarVisible v-if="state !== 'hidden'" v-bind="$attrs">
    <slot />
  </ScrollAreaScrollbarVisible>
</template>
