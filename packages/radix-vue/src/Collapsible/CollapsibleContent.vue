<script lang="ts">
export interface CollapsibleContentProps extends PrimitiveProps {}
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed, inject, nextTick, onMounted, ref, watch } from 'vue'
import { COLLAPSIBLE_INJECTION_KEY } from './CollapsibleRoot.vue'
import {
  Primitive,
  type PrimitiveProps,
  usePrimitiveElement,
} from '@/Primitive'
import { Presence } from '@/Presence'

const props = defineProps<CollapsibleContentProps>()

const injectedValue = inject(COLLAPSIBLE_INJECTION_KEY)

const presentRef = ref<InstanceType<typeof Presence>>()
const { primitiveElement, currentElement } = usePrimitiveElement()

const width = ref(0)
const height = ref(0)

// when opening we want it to immediately open to retrieve dimensions
// when closing we delay `present` to retrieve dimensions before closing
const isOpen = computed(() => injectedValue?.open.value)
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
    :present="injectedValue!.open.value"
    :force-mount="true"
  >
    <Primitive
      v-bind="$attrs"
      :id="injectedValue?.contentId"
      ref="primitiveElement"
      :as-child="props.asChild"
      :as="as"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-disabled="injectedValue?.disabled?.value ? 'true' : undefined"
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
