<script lang="ts">
type MotionAttribute = "to-start" | "to-end" | "from-start" | "from-end";

interface NavigationMenuContentImplProps {
  value: string;
  triggerRef: Ref<HTMLElement | undefined>;
  focusProxyRef: Ref<HTMLElement | undefined>;
  wasEscapeCloseRef: Ref<boolean>;
  // onContentFocusOutside(): void;
  // onRootContentClose(): void;
}
</script>

<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { computed, inject, ref, type Ref } from "vue";
import {
  focusFirst,
  getTabbableCandidates,
  makeContentId,
  makeTriggerId,
} from "./utils";
import { useArrowNavigation, useCollection } from "@/shared";

const props = defineProps<NavigationMenuContentImplProps>();
const emits = defineEmits<{
  (e: "escape", event: KeyboardEvent): void;
}>();

const { getItems } = useCollection();

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const triggerId = makeTriggerId(context!.baseId, props.value);
const contentId = makeContentId(context!.baseId, props.value);

const prevMotionAttributeRef = ref<MotionAttribute | null>(null);
const motionAttribute = computed(() => {
  const items = getItems();
  const values = items.map((item) => item.id.split("trigger-")[1]);
  if (context?.dir === "rtl") values.reverse();
  const index = values.indexOf(context!.modelValue.value);
  const prevIndex = values.indexOf(context!.previousValue.value);
  const isSelected = props.value === context?.modelValue.value;
  const wasSelected = prevIndex === values.indexOf(props.value);

  // We only want to update selected and the last selected content
  // this avoids animations being interrupted outside of that range
  if (!isSelected && !wasSelected) return prevMotionAttributeRef.value;

  const attribute = (() => {
    // Don't provide a direction on the initial open
    if (index !== prevIndex) {
      // If we're moving to this item from another
      if (isSelected && prevIndex !== -1)
        return index > prevIndex ? "from-end" : "from-start";
      // If we're leaving this item for another
      if (wasSelected && index !== -1)
        return index > prevIndex ? "to-start" : "to-end";
    }
    // Otherwise we're entering from closed or leaving the list
    // entirely and should not animate in any direction
    return null;
  })();

  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  prevMotionAttributeRef.value = attribute;
  return attribute;
});

const handleKeydown = (ev: KeyboardEvent) => {
  const isMetaKey = ev.altKey || ev.ctrlKey || ev.metaKey;
  const isTabKey = ev.key === "Tab" && !isMetaKey;
  const candidates = getTabbableCandidates(ev.currentTarget as HTMLElement);
  if (isTabKey) {
    const focusedElement = document.activeElement;
    const index = candidates.findIndex(
      (candidate) => candidate === focusedElement
    );
    const isMovingBackwards = ev.shiftKey;
    const nextCandidates = isMovingBackwards
      ? candidates.slice(0, index).reverse()
      : candidates.slice(index + 1, candidates.length);

    if (focusFirst(nextCandidates)) {
      // prevent browser tab keydown because we've handled focus
      ev.preventDefault();
    } else {
      // If we can't focus that means we're at the edges
      // so focus the proxy and let browser handle
      // tab/shift+tab keypress on the proxy instead
      props.focusProxyRef.value?.focus();
    }
  }

  const newSelectedElement = useArrowNavigation(
    ev,
    document.activeElement as HTMLElement,
    undefined,
    { itemsArray: candidates }
  );

  newSelectedElement?.focus();
};

const handleEscape = (ev: KeyboardEvent) => {
  emits("escape", ev);
};

defineExpose({
  ...props,
});
</script>

<template>
  <div
    :id="contentId"
    :aria-labelledby="triggerId"
    :data-motion="motionAttribute"
    @keydown.prevent="handleKeydown"
    @keydown.escape.prevent="handleEscape"
  >
    <slot></slot>
  </div>
</template>
