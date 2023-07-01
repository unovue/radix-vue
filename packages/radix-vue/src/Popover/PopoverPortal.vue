<!--
<script lang="ts">
export interface PopoverPortalProps {
  forceMount?: boolean;
  container?: HTMLElement | string;
}
</script>
-->
<template>
  <Teleport to="body">
    <slot />
  </Teleport>
</template>
