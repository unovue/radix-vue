<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface TabsContentProps extends PrimitiveProps {
  value: string
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with Vue animation libraries.
   */
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { injectTabsRootContext } from './TabsRoot.vue'
import { Primitive } from '@/Primitive'
import { makeContentId, makeTriggerId } from './utils'
import { Presence } from '@/Presence'

const props = defineProps<TabsContentProps>()

const rootContext = injectTabsRootContext()
const triggerId = computed(() => makeTriggerId(rootContext.baseId, props.value))
const contentId = computed(() => makeContentId(rootContext.baseId, props.value))

const isSelected = computed(() => props.value === rootContext.modelValue.value)
const isMountAnimationPreventedRef = ref(isSelected.value)

onMounted(() => {
  requestAnimationFrame(() => isMountAnimationPreventedRef.value = false)
})

const presenceRef = ref<InstanceType<typeof Presence>>()
</script>

<template>
  <Presence ref="presenceRef" :present="forceMount || isSelected">
    <Primitive
      :id="contentId"
      :as-child="asChild"
      :as="as"
      role="tabpanel"
      :data-state="isSelected ? 'active' : 'inactive'"
      :data-orientation="rootContext.orientation.value"
      :aria-labelledby="triggerId"
      :hidden="!presenceRef?.present"
      tabindex="0"
      :style="{
        animationDuration: isMountAnimationPreventedRef ? '0s' : undefined,
      }"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
