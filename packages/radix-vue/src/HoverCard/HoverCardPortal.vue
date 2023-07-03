<script lang="ts">
import BasePortal from "../shared/component/BasePortal.vue";
import type { BasePortalProps } from "../shared/component/BasePortal.vue";

export interface HoverCardPortalProps {
  forceMount?: boolean;
  container?: HTMLElement | string;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<BasePortalProps>(), {
  to: "body",
});
</script>

<template>
  <BasePortal :to="props.to">
    <slot />
  </BasePortal>
</template>
