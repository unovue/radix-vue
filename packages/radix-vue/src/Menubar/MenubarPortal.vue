<script setup lang="ts">
import { MenuPortal, type MenuPortalProps } from "@/Menu";
interface MenubarPortalProps extends MenuPortalProps {}

const props = defineProps<MenubarPortalProps>();
</script>

<template>
  <MenuPortal v-bind="props">
    <slot></slot>
  </MenuPortal>
</template>
