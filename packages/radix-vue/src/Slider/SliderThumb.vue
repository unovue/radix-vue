<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SliderThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { useCollection } from '@/shared'
import SliderThumbImpl from './SliderThumbImpl.vue'
import { usePrimitiveElement } from '@/Primitive'
import { computed } from 'vue'

const props = defineProps<SliderThumbProps>()
const { injectCollection } = useCollection('sliderThumb')
const collections = injectCollection()

const { primitiveElement, currentElement: thumbElement } = usePrimitiveElement()

const index = computed(() => thumbElement.value ? collections.value.findIndex(i => i === thumbElement.value) : -1)
</script>

<template>
  <SliderThumbImpl ref="primitiveElement" v-bind="props" :index="index">
    <slot />
  </SliderThumbImpl>
</template>
