<script lang="ts">
export interface TabsContentProps extends PrimitiveProps {
  value?: string
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { TABS_INJECTION_KEY } from './TabsRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = defineProps<TabsContentProps>()

const injectedValue = inject(TABS_INJECTION_KEY)

const dataState = computed<'active' | 'inactive'>(() => {
  return injectedValue?.modelValue?.value === props.value
    ? 'active'
    : 'inactive'
})
</script>

<template>
  <Primitive
    v-if="injectedValue?.modelValue?.value === props.value"
    :as-child="props.asChild"
    :as="as"
    role="tabpanel"
    :data-state="dataState"
    :data-orientation="injectedValue?.orientation"
    tabindex="0"
  >
    <slot />
  </Primitive>
</template>
