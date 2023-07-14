<script lang="ts">
import BasePortal from "../shared/component/BasePortal.vue";

export interface HoverCardPortalProps {
  forceMount?: boolean;
  container?: HTMLElement | string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<HoverCardPortalProps>(), {
  container: "body",
});
</script>

<template>
  <BasePortal :to="props.container">
    <slot />
  </BasePortal>
</template>
