<script setup lang="ts">
export interface MenuPortalProps {
  to?: string | HTMLElement;
  disabled?: boolean;
}
const props = withDefaults(defineProps<MenuPortalProps>(), {
  to: "body",
});
</script>

<template>
  <Teleport v-bind="props">
    <slot></slot>
  </Teleport>
</template>
