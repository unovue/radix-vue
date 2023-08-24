<script setup lang="ts">
export interface HoverCardPortalProps {
  to?: string | HTMLElement
  disabled?: boolean
}
const props = withDefaults(defineProps<HoverCardPortalProps>(), {
  to: 'body',
})
</script>

<template>
  <Teleport v-bind="props">
    <slot />
  </Teleport>
</template>
