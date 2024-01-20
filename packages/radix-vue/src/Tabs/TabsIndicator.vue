<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTabsRootContext } from './TabsRoot.vue'
import { nextTick, ref, watch } from 'vue'
import { useForwardRef } from '@/shared'

export interface TabsIndicatorProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useResizeObserver } from '@vueuse/core'

const props = defineProps<TabsIndicatorProps>()
const context = injectTabsRootContext()
useForwardRef()

interface IndicatorStyle {
  size: number | null
  position: number | null
}
const indicatorStyle = ref<IndicatorStyle>({
  size: null,
  position: null,
})

watch(() => context.modelValue.value, async (n) => {
  await nextTick()
  updateIndicatorStyle()
}, { immediate: true })

useResizeObserver(context.tabsList, updateIndicatorStyle)

function updateIndicatorStyle() {
  const activeTab = context.tabsList.value?.querySelector<HTMLButtonElement>('[role="tab"][data-state="active"]')

  if (!activeTab)
    return

  if (context.orientation.value === 'horizontal') {
    indicatorStyle.value = {
      size: activeTab.offsetWidth,
      position: activeTab.offsetLeft,
    }
  }
  else {
    indicatorStyle.value = {
      size: activeTab.offsetHeight,
      position: activeTab.offsetTop,
    }
  }
}
</script>

<template>
  <Primitive
    v-if="typeof indicatorStyle.size === 'number'"
    v-bind="props"
    :style="{
      '--radix-tabs-indicator-size': `${indicatorStyle.size}px`,
      '--radix-tabs-indicator-position': `${indicatorStyle.position}px`,
    }"
  >
    <slot />
  </Primitive>
</template>
