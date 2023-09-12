<script lang="ts">
export interface CheckboxIndicatorProps extends PrimitiveProps {
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { CHECKBOX_INJECTION_KEY } from './CheckboxRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'
import { Presence } from '@/Presence'
import { getState, isIndeterminate } from './utils'

withDefaults(defineProps<CheckboxIndicatorProps>(), {
  as: 'span',
})

const context = inject(CHECKBOX_INJECTION_KEY)
</script>

<template>
  <Presence :present="forceMount || isIndeterminate(context!.state.value) || context?.state.value === true">
    <Primitive
      :data-state="getState(context!.state.value)"
      :data-disabled="context?.disabled.value ? '' : undefined"
      :style="{ pointerEvents: 'none' }"
      :as-child="asChild"
      :as="as"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
  </Presence>
</template>
