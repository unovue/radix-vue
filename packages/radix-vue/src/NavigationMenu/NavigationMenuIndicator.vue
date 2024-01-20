<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface NavigationMenuIndicatorProps extends PrimitiveProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import { useCollection, useForwardExpose } from '@/shared'
import { Primitive } from '@/Primitive'
import { Presence } from '@/Presence'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NavigationMenuIndicatorProps>()

const { forwardRef } = useForwardExpose()
const { injectCollection } = useCollection('nav')
const collectionItems = injectCollection()
const menuContext = injectNavigationMenuContext()

const position = ref<{ size: number; offset: number }>()
const isHorizontal = computed(() => menuContext.orientation === 'horizontal')
const isVisible = computed(() => !!menuContext.modelValue.value)

const activeTrigger = ref<HTMLElement>()

function handlePositionChange() {
  if (activeTrigger.value) {
    position.value = {
      size: isHorizontal.value
        ? activeTrigger.value.offsetWidth
        : activeTrigger.value.offsetHeight,
      offset: isHorizontal.value
        ? activeTrigger.value.offsetLeft
        : activeTrigger.value.offsetTop,
    }
  }
}

watchEffect(() => {
  if (!menuContext.modelValue.value) {
    position.value = undefined
    return
  }
  const items = collectionItems.value
  activeTrigger.value = items.find(item =>
    item.id.includes(menuContext.modelValue.value),
  )
  handlePositionChange()
})

useResizeObserver(activeTrigger, handlePositionChange)
useResizeObserver(menuContext.indicatorTrack, handlePositionChange)
</script>

<template>
  <Teleport
    v-if="menuContext.indicatorTrack.value"
    :to="menuContext.indicatorTrack.value"
  >
    <Presence :present="forceMount || isVisible">
      <Primitive
        :ref="forwardRef"
        aria-hidden
        :data-state="isVisible ? 'visible' : 'hidden'"
        :data-orientation="menuContext.orientation"
        :as-child="props.asChild"
        :as="as"
        :style="{
          position: 'absolute',
          ...(isHorizontal
            ? {
              left: 0,
              width: `${position?.size}px`,
              transform: `translateX(${position?.offset}px)`,
            }
            : {
              top: 0,
              height: `${position?.size}px`,
              transform: `translateY(${position?.offset}px)`,
            }),
        }"
        v-bind="$attrs"
      >
        <slot />
      </Primitive>
    </Presence>
  </Teleport>
</template>
