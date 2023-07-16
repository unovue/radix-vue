<script setup lang="ts">
import { BasePortal, type BasePortalProps } from "@/shared/component";

export interface DialogPortalProps extends BasePortalProps {}

const props = defineProps<DialogPortalProps>();
</script>

<template>
  <BasePortal v-bind="props">
    <slot />
  </BasePortal>
</template>
