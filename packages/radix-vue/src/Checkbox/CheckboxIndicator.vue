<script lang="ts">
export interface CheckboxIndicatorProps extends PrimitiveProps {
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { injectCheckboxContext } from './CheckboxRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { Presence } from '@/Presence'
import { getState, isIndeterminate } from './utils'

withDefaults(defineProps<CheckboxIndicatorProps>(), {
  as: 'span',
})

const context = injectCheckboxContext()
</script>

<template>
  <Presence :present="forceMount || isIndeterminate(context.state.value) || context.state.value === true">
    <Primitive
      :data-state="getState(context.state.value)"
      :data-disabled="context.disabled.value ? '' : undefined"
      :style="{ pointerEvents: 'none' }"
      :as-child="asChild"
      :as="as"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
