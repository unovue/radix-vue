<script setup lang="ts">
import { computed, inject, ref, watchEffect } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import { useCollection } from '@/shared'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { Presence } from '@/Presence'

export interface NavigationMenuIndicatorProps extends PrimitiveProps {}
const props = defineProps<NavigationMenuIndicatorProps>()

const { injectCollection } = useCollection('nav')
const collectionItems = injectCollection()
const context = inject(NAVIGATION_MENU_INJECTION_KEY)

const position = ref<{ size: number; offset: number }>()
const isHorizontal = computed(() => context?.orientation === 'horizontal')
const isVisible = computed(() => !!context?.modelValue.value)

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
  if (!context?.modelValue.value) {
    position.value = undefined
    return
  }
  const items = collectionItems.value
  activeTrigger.value = items.find(item =>
    item.id.includes(context?.modelValue.value),
  )
  handlePositionChange()
})

useResizeObserver(activeTrigger, handlePositionChange)
useResizeObserver(context!.indicatorTrack, handlePositionChange)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Teleport
    v-if="context?.indicatorTrack.value"
    :to="context?.indicatorTrack.value"
  >
    <Presence :present="isVisible">
      <Primitive
        aria-hidden
        :data-state="isVisible ? 'visible' : 'hidden'"
        :data-orientation="context.orientation"
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
