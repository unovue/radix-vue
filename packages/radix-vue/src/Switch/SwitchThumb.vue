<script lang="ts">
export interface SwitchThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject } from 'vue'
import {
  SWITCH_INJECTION_KEY,
  type SwitchProvideValue,
} from './SwitchRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

withDefaults(defineProps<SwitchThumbProps>(), { as: 'span' })
const injectedValue = inject<SwitchProvideValue>(SWITCH_INJECTION_KEY)
</script>

<template>
  <Primitive
    :data-state="injectedValue?.checked?.value ? 'checked' : 'unchecked'"
    :data-disabled="injectedValue?.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
