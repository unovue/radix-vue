<script lang="ts">
export interface CollapsibleContentProps extends PrimitiveProps {}
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { injectCollapsibleContext } from './CollapsibleRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { Presence } from '@/Presence'

const props = defineProps<CollapsibleContentProps>()

const context = injectCollapsibleContext()

const presentRef = ref<InstanceType<typeof Presence>>()
const { primitiveElement, currentElement } = usePrimitiveElement()

const width = ref(0)
const height = ref(0)

// when opening we want it to immediately open to retrieve dimensions
// when closing we delay `present` to retrieve dimensions before closing
const isMountAnimationPrevented = ref(context.open.value)
const currentStyle = ref<Record<string, string>>()

watch(
  () => [context.open.value, presentRef.value?.present],
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
    :present="context.open.value"
    :force-mount="true"
  >
    <Primitive
      v-bind="$attrs"
      :id="context.contentId"
      ref="primitiveElement"
      :as-child="props.asChild"
      :as="as"
      :data-state="context.open.value ? 'open' : 'closed'"
      :data-disabled="context.disabled?.value ? 'true' : undefined"
      :hidden="!presentRef?.present"
      :style="{
        '--radix-collapsible-content-height': `${height}px`,
        '--radix-collapsible-content-width': `${width}px`,
      }"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
