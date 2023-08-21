<script setup lang="ts">
import { type RendererElement, inject } from 'vue'
import { MENU_INJECTION_KEY } from './MenuRoot.vue'
import { Presence } from '@/Presence'

export interface MenuPortalProps {
  to?: string | RendererElement | null | undefined
  disabled?: boolean
}
const props = withDefaults(defineProps<MenuPortalProps>(), {
  to: 'body',
})

const context = inject(MENU_INJECTION_KEY)
</script>

<template>
  <Presence :present="context!.open.value">
    <Teleport v-bind="props">
      <slot />
    </Teleport>
  </Presence>
</template>
