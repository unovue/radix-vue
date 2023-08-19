<script setup lang="ts">
import { MenuSubTrigger, type MenuSubTriggerProps } from "@/Menu";

export interface MenubarSubTriggerProps extends MenuSubTriggerProps {}
const props = defineProps<MenubarSubTriggerProps>();
</script>

<template>
  <MenuSubTrigger data-radix-menubar-subtrigger="" v-bind="props">
    <slot></slot>
  </MenuSubTrigger>
</template>
