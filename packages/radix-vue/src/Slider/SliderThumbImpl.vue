<script setup lang="ts">
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { computed, inject, onMounted, onUnmounted } from 'vue'
import { SLIDER_INJECTION_KEY } from './SliderRoot.vue'
import { SLIDER_ORIENTATION_INJECTION_KEY, convertValueToPercentage, getLabel, getThumbInBoundsOffset } from './utils'
import { useSize } from '@/shared'
import { useMounted } from '@vueuse/core'

export interface SliderThumbImplProps extends PrimitiveProps {
  index: number
}

const props = defineProps<SliderThumbImplProps>()

const context = inject(SLIDER_INJECTION_KEY)
const orientation = inject(SLIDER_ORIENTATION_INJECTION_KEY)

const { primitiveElement, currentElement: thumbElement } = usePrimitiveElement()

const value = computed(() => context?.modelValue?.value?.[props.index])
const percent = computed(() => value.value === undefined ? 0 : convertValueToPercentage(value.value, context?.min.value ?? 0, context?.max.value ?? 100))
const label = computed(() => getLabel(props.index, context?.modelValue?.value?.length ?? 0))
const size = useSize(thumbElement)
const orientationSize = computed(() => size[orientation!.size].value)
const thumbInBoundsOffset = computed(() => orientationSize.value
  ? getThumbInBoundsOffset(orientationSize.value, percent.value, orientation!.direction)
  : 0)

const isMounted = useMounted()
onMounted(() => {
  context?.thumbElements.value.push(thumbElement.value)
})
onUnmounted(() => {
  const i = context?.thumbElements.value.findIndex(i => i === thumbElement.value) ?? -1
  context?.thumbElements.value.splice(i, 1)
})

defineExpose({
  $el: thumbElement,
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <Primitive
    v-bind="$attrs"
    ref="primitiveElement"
    role="slider"
    data-radix-vue-collection-item
    :tabindex="context?.disabled.value ? undefined : 0"
    :aria-label="$attrs['aria-label'] || label"
    :data-disabled="context?.disabled.value"
    :data-orientation="context?.orientation.value"
    :aria-valuenow="value"
    :aria-valuemin="context?.min.value"
    :aria-valuemax="context?.max.value"
    :aria-orientation="context?.orientation.value"
    :as-child="asChild"
    :as="as"
    :style="{
      transform: 'var(--radix-slider-thumb-transform)',
      position: 'absolute',
      [orientation!.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`,
      /**
       * There will be no value on initial render while we work out the index so we hide thumbs
       * without a value, otherwise SSR will render them in the wrong position before they
       * snap into the correct position during hydration which would be visually jarring for
       * slower connections.
       */
      display: !isMounted && value === undefined ? 'none' : undefined,
    }"
    @focus="() => {
      context!.valueIndexToChangeRef.value = index
    }"
  >
    <slot />
  </Primitive>
</template>
