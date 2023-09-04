<script lang="ts">
export interface AspectRatioProps extends PrimitiveProps {
  ratio?: number
}

export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<AspectRatioProps>(), {
  ratio: 1,
})

const aspect = computed(() => {
  return (1 / props.ratio) * 100
})
</script>

<template>
  <div
    :style="`position: relative; width: 100%; padding-bottom: ${aspect}%`"
    data-radix-aspect-ratio-wrapper
  >
    <Primitive
      :as-child="asChild"
      :as="as"
      style="position: absolute; inset: 0px"
      v-bind="$attrs"
    >
      <slot :aspect="aspect" />
    </Primitive>
  </div>
</template>
