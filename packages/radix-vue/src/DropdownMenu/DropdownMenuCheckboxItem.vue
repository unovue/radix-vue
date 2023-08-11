<script setup lang="ts">
import {
  MenuCheckboxItem,
  type MenuCheckboxItemProps,
  type MenuCheckboxItemEmits,
} from "@/Menu";
import { useEmitAsProps } from "@/shared";

const props = defineProps<MenuCheckboxItemProps>();
const emits = defineEmits<MenuCheckboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <MenuCheckboxItem v-bind="{ ...props, ...emitsAsProps }">
    <slot></slot>
  </MenuCheckboxItem>
</template>
