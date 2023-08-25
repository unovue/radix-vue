<script setup lang="ts">
export interface PopoverPortalProps {
  to?: string | HTMLElement
  disabled?: boolean
}
const props = withDefaults(defineProps<PopoverPortalProps>(), {
  to: 'body',
})
</script>

<template>
  <Teleport v-bind="props">
    <slot />
  </Teleport>
</template>
