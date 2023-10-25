<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface DismissableLayerBranchProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive, usePrimitiveElement } from '@/Primitive'
import { onMounted, onUnmounted } from 'vue'
import { context } from './DismissableLayer.vue'

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
