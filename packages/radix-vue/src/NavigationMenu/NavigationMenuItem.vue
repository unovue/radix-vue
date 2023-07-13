<script lang="ts">
export interface NavigationMenuItemProps {
  value?: string;
}

export type NavigationMenuItemContextValue = {
  value: string;
  triggerRef: Ref<HTMLElement | undefined>;
  contentRef: Ref<VNode | undefined>;
  focusProxyRef: Ref<HTMLElement | undefined>;
  wasEscapeCloseRef: Ref<boolean>;
  onEntryKeyDown(): void;
  // onFocusProxyEnter(side: 'start' | 'end'): void;
  // onRootContentClose(): void;
  // onContentFocusOutside(): void;
};

export const NAVIGATION_MENU_ITEM_INJECTION_KEY =
  Symbol() as InjectionKey<NavigationMenuItemContextValue>;
</script>

<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import {
  provide,
  ref,
  type InjectionKey,
  type Ref,
  type VNode,
  inject,
} from "vue";
import { PrimitiveLi } from "@/Primitive";
import { useArrowNavigation, useCollection, useId } from "@/shared";
import { getTabbableCandidates, focusFirst } from "./utils";
import { unrefElement } from "@vueuse/core";

const props = defineProps<NavigationMenuItemProps>();
const { getItems } = useCollection();
const context = inject(NAVIGATION_MENU_INJECTION_KEY);

const value = props.value || useId();
const triggerRef = ref<HTMLElement>();
const contentRef = ref<VNode>();
const focusProxyRef = ref<HTMLElement>();

const wasEscapeCloseRef = ref(false);

provide(NAVIGATION_MENU_ITEM_INJECTION_KEY, {
  value,
  triggerRef,
  contentRef,
  focusProxyRef,
  wasEscapeCloseRef,
  onEntryKeyDown: (side = "start") => {
    // @ts-ignore
    const el = contentRef.value?.children?.[0]?.el.parentElement as HTMLElement;
    if (el) {
      // @ts-ignore
      const candidates = getTabbableCandidates(unrefElement(el));
      console.log(el, candidates);
      if (candidates.length)
        focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  },
});

const handleKeydown = (ev: KeyboardEvent) => {
  const currentFocus = document.activeElement as HTMLElement;
  if (ev.keyCode === 32 || ev.key === "Enter") {
    (ev.target as HTMLElement).click();
    return;
  }

  const newSelectedElement = useArrowNavigation(ev, currentFocus, undefined, {
    arrowKeyOptions: "horizontal",
    itemsArray: getItems(),
  });

  newSelectedElement?.focus();

  // context?.onItemSelect(newSelectedElement?.id.split("trigger-")[1] ?? "");
};
</script>

<template>
  <PrimitiveLi @keydown.prevent="handleKeydown">
    <slot></slot>
  </PrimitiveLi>
</template>
