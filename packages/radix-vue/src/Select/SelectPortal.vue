<script setup lang="ts">
export interface SelectPortalProps {
  to?: string | HTMLElement;
  disabled?: boolean;
}
const props = withDefaults(defineProps<SelectPortalProps>(), {
  to: "body",
});
</script>

<template>
  <Teleport v-bind="props">
    <slot></slot>
  </Teleport>
</template>
