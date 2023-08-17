<script setup lang="ts">
import BasePortal from "../shared/component/BasePortal.vue";
import type { BasePortalProps } from "../shared/component/BasePortal.vue";

export interface PopoverPortalProps extends BasePortalProps {}

const props = defineProps<PopoverPortalProps>();
</script>

<template>
  <BasePortal v-bind="props">
    <slot />
  </BasePortal>
</template>
