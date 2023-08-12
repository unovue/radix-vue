<script setup lang="ts">
import { MenuGroup, type MenuGroupProps } from "@/Menu";

interface MenubarGroupProps extends MenuGroupProps {}

const props = defineProps<MenubarGroupProps>();
</script>

<template>
  <MenuGroup v-bind="props">
    <slot></slot>
  </MenuGroup>
</template>
