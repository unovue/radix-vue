<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface SliderThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import SliderThumbImpl from './SliderThumbImpl.vue'
import { usePrimitiveElement } from '@/Primitive'
import { useCollection } from '@/Collection'
import { computed } from 'vue'

const props = defineProps<SliderThumbProps>()
const { getItems } = useCollection()

const { primitiveElement, currentElement: thumbElement } = usePrimitiveElement()

const index = computed(() => thumbElement.value ? getItems().findIndex(i => i.ref === thumbElement.value) : -1)
</script>

<template>
  <SliderThumbImpl ref="primitiveElement" v-bind="props" :index="index">
    <slot />
  </SliderThumbImpl>
</template>
