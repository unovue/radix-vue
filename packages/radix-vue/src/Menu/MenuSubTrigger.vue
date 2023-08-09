<script setup lang="ts">
import { computed, inject, nextTick, onUnmounted, ref } from "vue";
import MenuItemImpl, { type MenuItemImplProps } from "./MenuItemImpl.vue";
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from "./MenuRoot.vue";
import { MENU_SUB_INJECTION_KEY } from "./MenuSub.vue";
import { MENU_CONTENT_INJECTION_KEY } from "./MenuContentImpl.vue";
import MenuAnchor from "./MenuAnchor.vue";
import { getOpenState, isMouseEvent, type Side, SUB_OPEN_KEYS } from "./utils";

export interface MenuSubTriggerProps extends MenuItemImplProps {}

const props = defineProps<MenuSubTriggerProps>();

const context = inject(MENU_INJECTION_KEY);
const rootContext = inject(MENU_ROOT_INJECTION_KEY);
const subContext = inject(MENU_SUB_INJECTION_KEY);
const contentContext = inject(MENU_CONTENT_INJECTION_KEY);

const openTimerRef = ref<number | null>(null);
const pointerGraceTimerRef = computed(
  () => contentContext?.pointerGraceTimerRef.value
);

const clearOpenTimer = () => {
  if (openTimerRef.value) window.clearTimeout(openTimerRef.value);
  openTimerRef.value = null;
};

onUnmounted(() => {
  clearOpenTimer();
});

const handlePointerMove = (event: PointerEvent) => {
  if (!isMouseEvent(event)) return;
  contentContext!.onItemEnter(event);
  context!.onOpenChange(true);
  if (event.defaultPrevented) return;
  if (!props.disabled && !context?.open.value && !openTimerRef.value) {
    contentContext!.onPointerGraceIntentChange(null);
    openTimerRef.value = window.setTimeout(() => {
      clearOpenTimer();
    }, 100);
  }
};

const handlePointerLeave = (event: PointerEvent) => {
  if (!isMouseEvent(event)) return;
  clearOpenTimer();

  const contentRect = context!.content.value?.getBoundingClientRect();

  if (contentRect) {
    // TODO: make sure to update this when we change positioning logic
    const side = context!.content.value?.dataset.side as Side;

    const rightSide = side === "right";
    const bleed = rightSide ? -5 : +5;
    const contentNearEdge = contentRect[rightSide ? "left" : "right"];
    const contentFarEdge = contentRect[rightSide ? "right" : "left"];

    contentContext!.onPointerGraceIntentChange({
      area: [
        // Apply a bleed on clientX to ensure that our exit point is
        // consistently within polygon bounds
        { x: event.clientX + bleed, y: event.clientY },
        { x: contentNearEdge, y: contentRect.top },
        { x: contentFarEdge, y: contentRect.top },
        { x: contentFarEdge, y: contentRect.bottom },
        { x: contentNearEdge, y: contentRect.bottom },
      ],
      side,
    });

    window.clearTimeout(pointerGraceTimerRef.value);
    contentContext!.pointerGraceTimerRef.value = window.setTimeout(
      () => contentContext!.onPointerGraceIntentChange(null),
      300
    );
  } else {
    contentContext!.onTriggerLeave(event);
    if (event.defaultPrevented) return;

    // There's 100ms where the user may leave an item before the submenu was opened.
    contentContext!.onPointerGraceIntentChange(null);
  }
};

const handleKeyDown = async (event: KeyboardEvent) => {
  const isTypingAhead = contentContext!.searchRef.value !== "";
  if (props.disabled || (isTypingAhead && event.key === " ")) return;
  if (SUB_OPEN_KEYS[rootContext!.dir.value].includes(event.key)) {
    context!.onOpenChange(true);

    await nextTick();
    // The trigger may hold focus if opened via pointer interaction
    // so we ensure content is given focus again when switching to keyboard.
    context!.content.value?.focus();
    // prevent window from scrolling
    event.preventDefault();
  }
};

// watchEffect((cleanupFn) => {
//   const pointerGraceTimer = pointerGraceTimerRef.value;
//   cleanupFn(() => {
//     window.clearTimeout(pointerGraceTimer);
//     contentContext?.onPointerGraceIntentChange(null);
//   });
// });
</script>

<template>
  <MenuAnchor asChild>
    <MenuItemImpl
      :id="subContext!.triggerId"
      aria-haspopup="menu"
      :aria-expanded="context!.open.value"
      :aria-controls="subContext?.contentId"
      :data-state="getOpenState(context!.open.value)"
      :ref="
        (vnode) => {
          // @ts-ignore
          subContext?.onTriggerChange(vnode?.el);
        }
      "
      @click="
        async (event) => {
          if (props.disabled || event.defaultPrevented) return;
          /**
           * We manually focus because iOS Safari doesn't always focus on click (e.g. buttons)
           * and we rely heavily on `onFocusOutside` for submenus to close when switching
           * between separate submenus.
           */
          event.currentTarget.focus();
          if (!context!.open.value) context!.onOpenChange(true);
        }
      "
      @pointermove="handlePointerMove"
      @pointerleave="handlePointerLeave"
      @keydown="handleKeyDown"
    >
      <slot></slot>
    </MenuItemImpl>
  </MenuAnchor>
</template>
