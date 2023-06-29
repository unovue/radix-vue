<!--
<script lang="ts">
export interface TooltipPortalProps {
  forceMount?: boolean;
  container?: HTMLElement;
}
</script>
-->
<template>
  <Teleport to="body">
    <slot />
  </Teleport>
</template>
