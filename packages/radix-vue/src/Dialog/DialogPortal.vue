<!--
<script lang="ts">
export interface AlertDialogPortalrProps {
  forceMount?: boolean;
  container?: HTMLElement | string;
}
</script>
-->

<script lang="ts">
import BasePortal from "../shared/component/BasePortal.vue";
import type { BasePortalProps } from "../shared/component/BasePortal.vue";
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
