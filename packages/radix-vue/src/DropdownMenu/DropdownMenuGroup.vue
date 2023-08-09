<script setup lang="ts">
import { MenuGroup, type MenuGroupProps } from "@/Menu";

interface DropdownMenuGroupProps extends MenuGroupProps {}

const props = defineProps<DropdownMenuGroupProps>();
</script>

<template>
  <MenuGroup v-bind="props">
    <slot></slot>
  </MenuGroup>
</template>
