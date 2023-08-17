<script setup lang="ts">
export interface DialogPortalProps {
  to?: string | HTMLElement;
  disabled?: boolean;
}
const props = withDefaults(defineProps<DialogPortalProps>(), {
  to: "body",
});
</script>

<template>
  <Teleport v-bind="props">
    <slot></slot>
  </Teleport>
</template>
