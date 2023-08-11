<script setup lang="ts">
import { MenuItem, type MenuItemProps, type MenuItemEmits } from "@/Menu";
import { useEmitAsProps } from "@/shared";

const props = defineProps<MenuItemProps>();
const emits = defineEmits<MenuItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuItem>
</template>
