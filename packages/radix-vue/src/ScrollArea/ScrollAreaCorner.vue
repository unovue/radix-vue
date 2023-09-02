<script setup lang="ts">
import { computed } from 'vue'
import { injectScrollAreaContext } from './ScrollAreaRoot.vue'
import ScrollAreaCornerImpl from './ScrollAreaCornerImpl.vue'
import { type PrimitiveProps } from '@/Primitive'

export interface ScrollAreaCornerProps extends PrimitiveProps {}
const props = defineProps<ScrollAreaCornerProps>()

const context = injectScrollAreaContext()

const hasBothScrollbarsVisible = computed(
  () => !!context.scrollbarX.value && !!context.scrollbarY.value,
)
const hasCorner = computed(
  () => context.type.value !== 'scroll' && hasBothScrollbarsVisible.value,
)
</script>

<template>
  <ScrollAreaCornerImpl v-if="hasCorner" v-bind="props">
    <slot />
  </ScrollAreaCornerImpl>
</template>
