<script lang="ts">
export interface BasePortalProps {
  container?: string | HTMLElement
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BasePortalProps>(), {
  container: 'body',
})
</script>

<template>
  <Teleport :to="props.container">
    <slot />
  </Teleport>
</template>
