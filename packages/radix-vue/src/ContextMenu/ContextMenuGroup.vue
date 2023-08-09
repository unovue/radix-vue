<script setup lang="ts">
import { MenuGroup, type MenuGroupProps } from "@/Menu";

interface ContextMenuGroupProps extends MenuGroupProps {}

const props = defineProps<ContextMenuGroupProps>();
</script>

<template>
  <MenuGroup v-bind="props">
    <slot></slot>
  </MenuGroup>
</template>
