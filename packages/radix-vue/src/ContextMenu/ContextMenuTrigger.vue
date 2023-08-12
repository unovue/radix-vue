<script lang="ts">
interface ContextMenuTriggerProps extends PrimitiveProps {
  disabled?: boolean;
}
</script>

<script setup lang="ts">
import { computed, inject, nextTick, ref, toRefs } from "vue";
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { CONTEXT_MENU_INJECTION_KEY } from "./ContextMenuRoot.vue";
import { MenuAnchor } from "@/Menu";
import type { Point } from "@/Menu/utils";
import { isTouchOrPen } from "./utils";

const props = withDefaults(defineProps<ContextMenuTriggerProps>(), {
  as: "span",
  disabled: false,
});
const { disabled } = toRefs(props);

const context = inject(CONTEXT_MENU_INJECTION_KEY);
const point = ref<Point>({ x: 0, y: 0 });
const virtualEl = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      height: 0,
      left: point.value.x,
      right: point.value.x,
      top: point.value.y,
      bottom: point.value.y,
      ...point.value,
    } as DOMRect),
}));

const longPressTimer = ref(0);
const clearLongPress = () => {
  window.clearTimeout(longPressTimer.value);
};

const handleOpen = (event: MouseEvent | PointerEvent) => {
  point.value = { x: event.clientX, y: event.clientY };
  context?.onOpenChange(true);
};

const handleContextMenu = async (event: PointerEvent) => {
  if (!disabled.value) {
    await nextTick();
    if (!event.defaultPrevented) {
      clearLongPress();
      handleOpen(event);
      event.preventDefault();
    }
  }
};

const handlePointerDown = async (event: PointerEvent) => {
  if (!disabled.value) {
    await nextTick();

    if (isTouchOrPen(event) && !event.defaultPrevented) {
      // clear the long press here in case there's multiple touch points
      clearLongPress();
      longPressTimer.value = window.setTimeout(() => handleOpen(event), 700);
    }
  }
};

const handlePointerEvent = async (event: PointerEvent) => {
  if (!disabled.value) {
    await nextTick();
    if (isTouchOrPen(event) && !event.defaultPrevented) {
      clearLongPress();
    }
  }
};

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <MenuAnchor as="div" :element="virtualEl"></MenuAnchor>

  <Primitive
    :as="as"
    :as-child="asChild"
    :data-state="context?.open.value ? 'open' : 'closed'"
    :data-disabled="disabled ? '' : undefined"
    :style="{
      WebkitTouchCallout: 'none',
    }"
    v-bind="$attrs"
    @contextmenu="handleContextMenu"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerEvent"
    @pointercancel="handlePointerEvent"
    @pointerup="handlePointerEvent"
  >
    <slot />
  </Primitive>
</template>
