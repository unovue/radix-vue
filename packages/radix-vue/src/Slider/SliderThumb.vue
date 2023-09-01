<script setup lang="ts">
import SliderThumbImpl from './SliderThumbImpl.vue'
import { type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { computed } from 'vue'
import { injectSliderCollection } from './SliderRoot.vue'

export interface SliderThumbProps extends PrimitiveProps { }

const props = defineProps<SliderThumbProps>()
const collections = injectSliderCollection()

const { primitiveElement, currentElement: thumbElement }
  = usePrimitiveElement()

const index = computed(() => {
  return thumbElement.value
    ? collections.value.findIndex(i => i === thumbElement.value)
    : -1
})
</script>

<template>
  <SliderThumbImpl ref="primitiveElement" v-bind="props" :index="index">
    <slot />
  </SliderThumbImpl>
</template>
