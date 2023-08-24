<script lang="ts">
export interface CheckboxIndicatorProps extends PrimitiveProps {
  forceMount?: boolean
}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import { CHECKBOX_INJECTION_KEY } from './CheckboxRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

const props = withDefaults(defineProps<CheckboxIndicatorProps>(), {
  as: 'span',
})

const injectedValue = inject(CHECKBOX_INJECTION_KEY)
</script>

<template>
  <Primitive
    v-if="injectedValue?.modelValue.value"
    style="pointer-events: none"
    :as-child="props.asChild"
    :as="as"
    :data-disabled="injectedValue.disabled ? '' : undefined"
    :data-state="injectedValue.modelValue.value ? 'checked' : 'unchecked'"
  >
    <slot />
  </Primitive>
</template>
