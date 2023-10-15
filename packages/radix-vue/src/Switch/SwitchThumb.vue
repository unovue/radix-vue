<script lang="ts">
export interface SwitchThumbProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import {
  injectSwitchRootContext,
} from './SwitchRoot.vue'
import { Primitive, type PrimitiveProps } from '@/Primitive'

withDefaults(defineProps<SwitchThumbProps>(), { as: 'span' })
const rootContext = injectSwitchRootContext()
</script>

<template>
  <Primitive
    :data-state="rootContext.checked?.value ? 'checked' : 'unchecked'"
    :data-disabled="rootContext.disabled.value ? '' : undefined"
    :as-child="asChild"
    :as="as"
  >
    <slot />
  </Primitive>
</template>
