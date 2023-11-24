<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { injectTabsRootContext } from './TabsRoot.vue'
import { nextTick, ref, watch } from 'vue'

export interface TabsIndicatorProps extends PrimitiveProps {
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'

const props = defineProps<TabsIndicatorProps>()
const context = injectTabsRootContext()

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
  const activeTab = context.tabsList.value?.querySelector('[role="tab"][data-state="active"]') as HTMLButtonElement
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
}, { immediate: true })
</script>

<template>
  <Primitive
    v-bind="props" :style="{
      '--size': `${indicatorStyle.size}px`,
      '--position': `${indicatorStyle.position}px`,
    }"
  >
    <slot />
  </Primitive>
</template>
