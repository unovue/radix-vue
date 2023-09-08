<script lang="ts">
import {
  type InjectionKey,
  type Ref,
  computed,
  inject,
  onUnmounted,
  provide,
  toRefs,
  watch,
} from 'vue'

export interface ScrollAreaScrollbarProps extends PrimitiveProps {
  orientation?: 'vertical' | 'horizontal'
  forceMount?: boolean
}

export interface ScrollAreaScollbarProvideValue {
  as: Ref<AsTag>
  orientation: Ref<'vertical' | 'horizontal'>
  forceMount?: Ref<boolean>
  isHorizontal: Ref<boolean>
  asChild: Ref<boolean>
}

export const SCROLL_AREA_SCROLLBAR_INJECTION_KEY
  = Symbol() as InjectionKey<ScrollAreaScollbarProvideValue>

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { SCROLL_AREA_INJECTION_KEY } from './ScrollAreaRoot.vue'
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

const injectedValue = inject(SCROLL_AREA_INJECTION_KEY)

const isHorizontal = computed(() => props.orientation === 'horizontal')

watch(
  isHorizontal,
  () => {
    if (isHorizontal.value)
      injectedValue?.onScrollbarXEnabledChange(true)
    else injectedValue?.onScrollbarYEnabledChange(true)
  },
  { immediate: true },
)

onUnmounted(() => {
  injectedValue?.onScrollbarXEnabledChange(false)
  injectedValue?.onScrollbarYEnabledChange(false)
})

const { orientation, forceMount, asChild, as } = toRefs(props)
provide<ScrollAreaScollbarProvideValue>(SCROLL_AREA_SCROLLBAR_INJECTION_KEY, {
  orientation,
  forceMount,
  isHorizontal,
  as,
  asChild,
})
</script>

<template>
  <ScrollAreaScrollbarHover
    v-if="injectedValue?.type.value === 'hover'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarHover>
  <ScrollAreaScrollbarScroll
    v-else-if="injectedValue?.type.value === 'scroll'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarScroll>
  <ScrollAreaScrollbarAuto
    v-else-if="injectedValue?.type.value === 'auto'"
    v-bind="$attrs"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarAuto>
  <ScrollAreaScrollbarVisible
    v-else-if="injectedValue?.type.value === 'always'"
    v-bind="$attrs"
    data-state="visible"
    :force-mount="forceMount"
  >
    <slot />
  </ScrollAreaScrollbarVisible>
</template>
