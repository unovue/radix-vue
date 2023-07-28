<script lang="ts">
import type { BasePortalProps } from "@/shared/component/BasePortal.vue";

export interface PopoverPortalProps extends BasePortalProps { }
</script>

<script setup lang="ts">
import BasePortal from "@/shared/component/BasePortal.vue";

const props = defineProps<PopoverPortalProps>();
</script>

<template>
  <BasePortal v-bind="props">
    <slot />
  </BasePortal>
</template>
