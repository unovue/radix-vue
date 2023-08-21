<script setup lang="ts">
import {
  type ComponentPublicInstance,
  computed,
  inject,
  ref,
  watch,
} from 'vue'
import { unrefElement, useResizeObserver } from '@vueuse/core'
import { NAVIGATION_MENU_INJECTION_KEY } from './NavigationMenuRoot.vue'
import { getOpenState } from './utils'
import NavigationMenuContentImpl from './NavigationMenuContentImpl.vue'
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
const activeContentValue = computed(() =>
  open.value ? context!.modelValue.value : context!.previousValue.value,
)

watch(currentElement, () => {
  context!.onViewportChange(currentElement.value)
})

const viewportContentList = computed(() =>
  // @ts-expect-error
  Array.from(context?.viewportContent.value.values()),
)

const content = ref<HTMLElement>()
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
      @pointerenter="context?.onContentEnter(activeContentValue)"
      @pointerleave="context?.onContentLeave()"
    >
      <Presence
        v-for="node in viewportContentList"
        :key="node.props?.value"
        :present="activeContentValue === node.props?.value"
      >
        <NavigationMenuContentImpl
          :ref="(n: ComponentPublicInstance) => {
            if (activeContentValue === node.props?.value && n) content = unrefElement(n.$el)
          }"
          v-bind="{ ...node.props, ...node.parentProps }"
        >
          <component :is="node" />
        </NavigationMenuContentImpl>
      </Presence>
    </Primitive>
  </Presence>
</template>
