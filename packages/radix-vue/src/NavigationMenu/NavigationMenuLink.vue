<script lang="ts">
export interface NavigationMenuLinkProps {
  active?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveA } from "@/Primitive";
// const LINK_SELECT = "navigationMenu.linkSelect";

defineProps<NavigationMenuLinkProps>();

const handleClick = (ev: MouseEvent) => {
  //  TODO: dispatch custom event (https://github.com/radix-ui/primitives/blob/main/packages/react/navigation-menu/src/NavigationMenu.tsx#L604)
};
</script>

<template>
  <PrimitiveA
    :data-active="active ? '' : undefined"
    :aria-current="active ? 'page' : undefined"
    @click="handleClick"
    data-radix-vue-collection-item
  >
    <slot></slot>
  </PrimitiveA>
</template>
