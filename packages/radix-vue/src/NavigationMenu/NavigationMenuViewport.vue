<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'

export interface NavigationMenuViewportProps extends PrimitiveProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import {
  computed,
  nextTick,
  ref,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { injectNavigationMenuContext } from './NavigationMenuRoot.vue'
import { getOpenState, whenMouse } from './utils'
import {
  Primitive,
} from '@/Primitive'
import { Presence } from '@/Presence'

defineOptions({
  inheritAttrs: false,
})

defineProps<NavigationMenuViewportProps>()

const { forwardRef, currentElement } = useForwardExpose()

const menuContext = injectNavigationMenuContext()

const size = ref<{ width: number; height: number }>()

const open = computed(() => !!menuContext.modelValue.value)
// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const activeContentValue = computed(() => menuContext.modelValue.value)

watch(currentElement, () => {
  if (currentElement.value)
    menuContext.onViewportChange(currentElement.value)
})

const content = ref<HTMLElement>()

watch([activeContentValue, open], async () => {
  await nextTick()
  if (!currentElement.value)
    return

  const el = (currentElement.value as HTMLElement).querySelector('[data-state=open]')?.children?.[0] as HTMLElement | undefined
  content.value = el
}, { immediate: true })

useResizeObserver(content, () => {
  if (content.value) {
    size.value = {
      width: content.value.offsetWidth,
      height: content.value.offsetHeight,
    }
  }
})
</script>

<template>
  <Presence :present="forceMount || open">
    <Primitive
      v-bind="$attrs"
      :ref="forwardRef"
      :as="as"
      :as-child="asChild"
      :data-state="getOpenState(open)"
      :data-orientation="menuContext.orientation"
      :style="{
        // Prevent interaction when animating out
        pointerEvents: !open && menuContext.isRootMenu ? 'none' : undefined,
        ['--radix-navigation-menu-viewport-width' as any]: size ? `${size?.width}px` : undefined,
        ['--radix-navigation-menu-viewport-height' as any]: size ? `${size?.height}px` : undefined,
      }"
      @pointerenter="menuContext.onContentEnter(menuContext.modelValue.value)"
      @pointerleave="whenMouse(() => menuContext.onContentLeave())"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
