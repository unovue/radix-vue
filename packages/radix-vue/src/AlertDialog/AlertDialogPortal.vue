<!--
<script lang="ts">
export interface AlertDialogPortalrProps {
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
