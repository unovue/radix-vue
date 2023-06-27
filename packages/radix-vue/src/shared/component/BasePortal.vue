<script lang="ts">
export interface BasePortalProps {
  to?: string | HTMLElement;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BasePortalProps>(), {
  to: "body",
});
</script>

<template>
  <Teleport :to="props.to">
    <slot />
  </Teleport>
</template>
