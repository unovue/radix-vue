<script setup lang="ts">
import { Primitive, type PrimitiveProps, usePrimitiveElement } from '@/Primitive'
import { onMounted, onUnmounted } from 'vue'
import { context } from './DismissableLayer.vue'

export interface DismissableLayerBranchProps extends PrimitiveProps {}
const props = defineProps<DismissableLayerBranchProps>()

const { primitiveElement, currentElement } = usePrimitiveElement()
onMounted(() => {
  context.branches.add(currentElement.value)
})
onUnmounted(() => {
  context.branches.delete(currentElement.value)
})
</script>

<template>
  <Primitive ref="primitiveElement" v-bind="props">
    <slot />
  </Primitive>
</template>
