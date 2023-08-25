<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { SCROLL_AREA_INJECTION_KEY } from './ScrollAreaRoot.vue'
import { Primitive } from '@/Primitive'

const context = inject(SCROLL_AREA_INJECTION_KEY)

const width = ref(0)
const height = ref(0)

const hasSize = computed(() => !!width.value && !!height.value)

function setCornerHeight() {
  const offsetHeight = context?.scrollbarX.value?.offsetHeight || 0
  context?.onCornerHeightChange(offsetHeight)
  height.value = offsetHeight
}
function setCornerWidth() {
  const offsetWidth = context?.scrollbarY.value?.offsetWidth || 0
  context?.onCornerWidthChange(offsetWidth)
  width.value = offsetWidth
}

useResizeObserver(context?.scrollbarX.value, setCornerHeight)
useResizeObserver(context?.scrollbarY.value, setCornerWidth)

// because we are not remounting the component, useResizeObserver doesn't trigger, thus using watcher here
watch(() => context?.scrollbarX.value, setCornerHeight)
watch(() => context?.scrollbarY.value, setCornerWidth)
</script>

<template>
  <Primitive
    v-if="hasSize"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      position: 'absolute',
      right: context!.dir.value === 'ltr' ? 0 : undefined,
      left: context!.dir.value === 'rtl' ? 0 : undefined,
      bottom: 0,
    }"
    v-bind="$parent?.$props"
  >
    <slot />
  </Primitive>
</template>
