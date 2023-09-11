<script lang="ts">
import {
  type Ref,
  computed,
  onUnmounted,
  toRefs,
  watch,
} from 'vue'
import { createContext } from '@/shared'

export interface ScrollAreaScrollbarProps extends PrimitiveProps {
  orientation?: 'vertical' | 'horizontal'
  forceMount?: boolean
}

export interface ScrollAreaScollbarContextValue {
  as: Ref<AsTag>
  orientation: Ref<'vertical' | 'horizontal'>
  forceMount?: Ref<boolean>
  isHorizontal: Ref<boolean>
  asChild: Ref<boolean>
}

export const [injectScrollAreaScrollbarContext, provideScrollAreaScrollbarContext]
  = createContext<ScrollAreaScollbarContextValue>('ScrollAreaScrollbar')

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { injectScrollAreaContext } from './ScrollAreaRoot.vue'
import ScrollAreaScrollbarHover from './ScrollAreaScrollbarHover.vue'
import ScrollAreaScrollbarScroll from './ScrollAreaScrollbarScroll.vue'
import ScrollAreaScrollbarAuto from './ScrollAreaScrollbarAuto.vue'
import ScrollAreaScrollbarVisible from './ScrollAreaScrollbarVisible.vue'
import { type AsTag, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps>(), {
  orientation: 'vertical',
  forceMount: undefined,
  as: 'div',
})

const context = injectScrollAreaContext()

const isHorizontal = computed(() => props.orientation === 'horizontal')

watch(
  isHorizontal,
  () => {
    if (isHorizontal.value)
      context.onScrollbarXEnabledChange(true)
    else context?.onScrollbarYEnabledChange(true)
  },
  { immediate: true },
)

onUnmounted(() => {
  context.onScrollbarXEnabledChange(false)
  context.onScrollbarYEnabledChange(false)
})

const { orientation, forceMount, asChild, as } = toRefs(props)

provideScrollAreaScrollbarContext({
  orientation,
  forceMount,
  isHorizontal,
  as,
  asChild,
})
</script>

<template>
  <ScrollAreaScrollbarHover
    v-if="context.type.value === 'hover'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarHover>
  <ScrollAreaScrollbarScroll
    v-else-if="context.type.value === 'scroll'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarScroll>
  <ScrollAreaScrollbarAuto
    v-else-if="context.type.value === 'auto'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarAuto>
  <ScrollAreaScrollbarVisible
    v-else-if="context.type.value === 'always'"
    v-bind="$attrs"
    data-state="visible"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarVisible>
</template>
