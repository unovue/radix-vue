<script setup lang="ts">
import BasePortal from "../shared/component/BasePortal.vue";
import type { BasePortalProps } from "../shared/component/BasePortal.vue";

export interface DialogPortalProps extends BasePortalProps {}

const props = defineProps<DialogPortalProps>();
</script>

<template>
  <BasePortal v-bind="props">
    <slot />
  </BasePortal>
</template>
