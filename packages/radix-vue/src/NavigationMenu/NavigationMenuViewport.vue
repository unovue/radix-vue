<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  ref,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import { getOpenState } from './utils'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { Presence } from '@/Presence'

export interface NavigationMenuViewportProps extends PrimitiveProps {}
defineProps<NavigationMenuViewportProps>()

const { primitiveElement, currentElement } = usePrimitiveElement()

const context = inject(NAVIGATION_MENU_INJECTION_KEY)

const size = ref<{ width: number; height: number }>()

const open = computed(() => !!context?.modelValue.value)
// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const activeContentValue = computed(() => context!.modelValue.value)

watch(currentElement, () => {
  if (currentElement.value)
    context!.onViewportChange(currentElement.value)
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

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Presence :present="open">
    <Primitive
      v-bind="$attrs"
      ref="primitiveElement"
      :as="as"
      :as-child="asChild"
      :data-state="getOpenState(open)"
      :data-orientation="context?.orientation"
      :style="{
        // Prevent interaction when animating out
        pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
        ['--radix-navigation-menu-viewport-width' as any]: size ? `${size?.width}px` : undefined,
        ['--radix-navigation-menu-viewport-height' as any]: size ? `${size?.height}px` : undefined,
      }"
      @pointerenter="context?.onContentEnter(context!.modelValue.value)"
      @pointerleave="context?.onContentLeave()"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
