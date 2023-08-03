<script lang="ts">
export interface NavigationMenuLinkProps extends PrimitiveProps {
  active?: boolean;
}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
// const LINK_SELECT = "navigationMenu.linkSelect";

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  as: "a",
});

const handleClick = (ev: MouseEvent) => {
  //  TODO: dispatch custom event (https://github.com/radix-ui/primitives/blob/main/packages/react/navigation-menu/src/NavigationMenu.tsx#L604)
};
</script>

<template>
  <Primitive
    :as="as"
    :data-active="active ? '' : undefined"
    :aria-current="active ? 'page' : undefined"
    :as-child="props.asChild"
    @click="handleClick"
    data-radix-vue-collection-item
  >
    <slot></slot>
  </Primitive>
</template>
