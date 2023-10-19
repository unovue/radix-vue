<script setup lang="ts">
import { computed } from 'vue'
import { injectScrollAreaRootContext } from './ScrollAreaRoot.vue'
import ScrollAreaCornerImpl from './ScrollAreaCornerImpl.vue'
import { type PrimitiveProps } from '@/Primitive'

export interface ScrollAreaCornerProps extends PrimitiveProps {}
const props = defineProps<ScrollAreaCornerProps>()

const rootContext = injectScrollAreaRootContext()

const hasBothScrollbarsVisible = computed(
  () => !!rootContext.scrollbarX.value && !!rootContext.scrollbarY.value,
)
const hasCorner = computed(
  () => rootContext.type.value !== 'scroll' && hasBothScrollbarsVisible.value,
)
</script>

<template>
  <ScrollAreaCornerImpl v-if="hasCorner" v-bind="props">
    <slot />
  </ScrollAreaCornerImpl>
</template>
