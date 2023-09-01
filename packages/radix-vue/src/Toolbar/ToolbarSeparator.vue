<script setup lang="ts">
import { inject } from 'vue'
import { Separator, type SeparatorProps } from '@/Separator'
import { TOOLBAR_INJECTION_KEY } from './ToolbarRoot.vue'

export interface ToolbarSeparatorProps extends SeparatorProps {}
const props = defineProps<ToolbarSeparatorProps>()

const context = inject(TOOLBAR_INJECTION_KEY)
</script>

<template>
  <Separator
    :orientation="context?.orientation.value"
    :as-child="props.asChild"
    :as="as"
  >
    <slot />
  </Separator>
</template>
