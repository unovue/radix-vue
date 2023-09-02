<script lang="ts">
export interface TabsContentProps extends PrimitiveProps {
  value: string
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { injectTabsContext } from './TabsRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { makeContentId, makeTriggerId } from './utils'
import { Presence } from '@/Presence'

const props = defineProps<TabsContentProps>()

const context = injectTabsContext()
const triggerId = computed(() => makeTriggerId(context.baseId, props.value))
const contentId = computed(() => makeContentId(context.baseId, props.value))

const isSelected = computed(() => props.value === context.modelValue.value)
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
      :data-orientation="context.orientation.value"
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
