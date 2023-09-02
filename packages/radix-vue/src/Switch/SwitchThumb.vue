<script lang="ts">
export interface SwitchThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import {
  injectSwitchContext,
} from './SwitchRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

withDefaults(defineProps<SwitchThumbProps>(), { as: 'span' })

const context = injectSwitchContext()
</script>

<template>
  <Primitive
    :data-state="context.checked?.value ? 'checked' : 'unchecked'"
    :data-disabled="context.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
