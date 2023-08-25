<script setup lang="ts">
export interface TooltipPortalProps {
  to?: string | HTMLElement
  disabled?: boolean
}
const props = withDefaults(defineProps<TooltipPortalProps>(), {
  to: 'body',
})
</script>

<template>
  <Teleport v-bind="props">
    <slot />
  </Teleport>
</template>
