<script lang="ts">
export interface NavigationMenuLinkProps extends PrimitiveProps {
  active?: boolean;
}
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { EVENT_ROOT_CONTENT_DISMISS } from "./utils";
import { nextTick } from "vue";
// const LINK_SELECT = "navigationMenu.linkSelect";

const props = withDefaults(defineProps<NavigationMenuLinkProps>(), {
  as: "a",
});
const emits = defineEmits<{ (e: "select", payload: MouseEvent): void }>();

const handleClick = async (ev: MouseEvent) => {
  emits("select", ev);

  await nextTick();
  if (!ev.defaultPrevented && !ev.metaKey) {
    const rootContentDismissEvent = new CustomEvent(
      EVENT_ROOT_CONTENT_DISMISS,
      {
        bubbles: true,
        cancelable: true,
      }
    );
    ev.target?.dispatchEvent(rootContentDismissEvent);
  }
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
