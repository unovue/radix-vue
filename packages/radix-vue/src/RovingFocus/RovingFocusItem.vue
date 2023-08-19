<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { computed, inject, nextTick, onMounted, onUnmounted } from "vue";
import { ROVING_FOCUS_INJECTION_KEY } from "./RovingFocusGroup.vue";
import { useId, useNewCollection } from "@/shared";
import { focusFirst, getFocusIntent, wrapArray } from "./utils";

export interface RovingFocusItemProps extends PrimitiveProps {
  tabStopId?: string;
  focusable?: boolean;
  active?: boolean;
}

const props = withDefaults(defineProps<RovingFocusItemProps>(), {
  focusable: true,
  active: true,
  as: "span",
});

const context = inject(ROVING_FOCUS_INJECTION_KEY);
const autoId = useId();
const id = computed(() => props.tabStopId || autoId);
const isCurrentTabStop = computed(
  () => context?.currentTabStopId.value === id.value
);

const { injectCollection } = useNewCollection("rovingFocus");
const collections = injectCollection();

const { onFocusableItemAdd, onFocusableItemRemove } = context!;

onMounted(() => {
  if (props.focusable) onFocusableItemAdd();
});
onUnmounted(() => {
  if (props.focusable) onFocusableItemRemove();
});

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Tab" && event.shiftKey) {
    context?.onItemShiftTab();
    return;
  }

  if (event.target !== event.currentTarget) return;

  const focusIntent = getFocusIntent(
    event,
    context?.orientation.value,
    context?.dir.value
  );

  if (focusIntent !== undefined) {
    event.preventDefault();
    let candidateNodes = [...collections.value];

    if (focusIntent === "last") candidateNodes.reverse();
    else if (focusIntent === "prev" || focusIntent === "next") {
      if (focusIntent === "prev") candidateNodes.reverse();
      const currentIndex = candidateNodes.indexOf(
        event.currentTarget as HTMLElement
      );

      candidateNodes = context?.loop.value
        ? wrapArray(candidateNodes, currentIndex + 1)
        : candidateNodes.slice(currentIndex + 1);
    }

    nextTick(() => focusFirst(candidateNodes));
  }
};
</script>

<template>
  <Primitive
    data-radix-vue-collection-item
    :tabindex="isCurrentTabStop ? 0 : -1"
    :data-orientation="context?.orientation.value"
    :as="as"
    :as-child="asChild"
    @mousedown="
      (event) => {
        // We prevent focusing non-focusable items on `mousedown`.
        // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
        if (!focusable) event.preventDefault();
        // Safari doesn't focus a button when clicked so we run our logic on mousedown also
        else context?.onItemFocus(id);
      }
    "
    @focus="context?.onItemFocus(id)"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </Primitive>
</template>
