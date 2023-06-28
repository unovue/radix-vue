<!--
<script lang="ts">
export interface DropdwonMenuPortalProps {
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
