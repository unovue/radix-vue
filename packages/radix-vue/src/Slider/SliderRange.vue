<script lang="ts">
export interface SliderRangeProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { injectSliderContext } from './SliderRoot.vue'
import { convertValueToPercentage, injectSliderOrientationContext } from './utils'

withDefaults(defineProps<SliderRangeProps>(), { as: 'span' })

const context = injectSliderContext()
const orientation = injectSliderOrientationContext()

const percentages = computed(() => {
  return context.modelValue?.value?.map(value =>
    convertValueToPercentage(value, context.min.value, context.max.value),
  )
})

const offsetStart = computed(() => {
  return context.modelValue!.value!.length > 1
    ? Math.min(...percentages.value!)
    : 0
})

const offsetEnd = computed(() => 100 - Math.max(...percentages.value!))
</script>

<template>
  <Primitive
    :data-disabled="context.disabled.value"
    :data-orientation="context.orientation.value"
    :as-child="asChild"
    :as="as"
    :style="{
      [orientation.startEdge]: `${offsetStart}%`,
      [orientation.endEdge]: `${offsetEnd}%`,
    }"
  >
    <slot />
  </Primitive>
</template>
