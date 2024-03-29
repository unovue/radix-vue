<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose, useId } from '@/shared'

export interface CollapsibleContentProps extends PrimitiveProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { injectCollapsibleRootContext } from './CollapsibleRoot.vue'
import {
  Primitive,
} from '@/Primitive'
import { Presence } from '@/Presence'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<CollapsibleContentProps>()

const rootContext = injectCollapsibleRootContext()
rootContext.contentId ||= useId(undefined, 'radix-vue-collapsible-content')

const presentRef = ref<InstanceType<typeof Presence>>()
const { forwardRef, currentElement } = useForwardExpose()

const width = ref(0)
const height = ref(0)

// when opening we want it to immediately open to retrieve dimensions
// when closing we delay `present` to retrieve dimensions before closing
const isOpen = computed(() => rootContext.open.value)
const isMountAnimationPrevented = ref(isOpen.value)
const currentStyle = ref<Record<string, string>>()

watch(
  () => [isOpen.value, presentRef.value?.present],
  async () => {
    await nextTick()
    const node = currentElement.value
    if (!node)
      return
    currentStyle.value = currentStyle.value || {
      transitionDuration: node.style.transitionDuration,
      animationName: node.style.animationName,
    }
    // block any animations/transitions so the element renders at its full dimensions
    node.style.transitionDuration = '0s'
    node.style.animationName = 'none'

    // get width and height from full dimensions
    const rect = node.getBoundingClientRect()
    height.value = rect.height
    width.value = rect.width

    // kick off any animations/transitions that were originally set up if it isn't the initial mount
    if (!isMountAnimationPrevented.value) {
      node.style.transitionDuration = currentStyle.value.transitionDuration
      node.style.animationName = currentStyle.value.animationName
    }
  },
  {
    immediate: true,
  },
)

onMounted(() => {
  requestAnimationFrame(() => {
    isMountAnimationPrevented.value = false
  })
})
</script>

<template>
  <Presence
    ref="presentRef"
    :present="forceMount || rootContext.open.value"
    :force-mount="true"
  >
    <Primitive
      v-bind="$attrs"
      :id="rootContext.contentId"
      :ref="forwardRef"
      :as-child="props.asChild"
      :as="as"
      :data-state="rootContext.open.value ? 'open' : 'closed'"
      :data-disabled="rootContext.disabled?.value ? '' : undefined"
      :hidden="!presentRef?.present"
      :style="{
        [`--radix-collapsible-content-height`]: `${height}px`,
        [`--radix-collapsible-content-width`]: `${width}px`,
      }"
    >
      <slot v-if="presentRef?.present" />
    </Primitive>
  </Presence>
</template>
