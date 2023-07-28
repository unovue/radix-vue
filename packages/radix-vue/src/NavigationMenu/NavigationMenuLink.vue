<script lang="ts">
export interface NavigationMenuLinkProps extends PrimitiveProps {
  active?: boolean;
}
</script>

<script setup lang="ts">
import { PrimitiveA, type PrimitiveProps } from "@/Primitive";
import { EVENT_ROOT_CONTENT_DISMISS } from "./utils";
import { nextTick } from "vue";

const props = defineProps<NavigationMenuLinkProps>();

const handleClick = async (ev: MouseEvent) => {
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
  <PrimitiveA
    :data-active="active ? '' : undefined"
    :aria-current="active ? 'page' : undefined"
    :as-child="props.asChild"
    @click="handleClick"
    data-radix-vue-collection-item
  >
    <slot></slot>
  </PrimitiveA>
</template>
