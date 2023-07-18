<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from "./NavigationMenuItem.vue";
import { computed, inject, onMounted, ref, type VNode } from "vue";
import {
  PrimitiveButton,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { VisuallyHidden } from "@/VisuallyHidden";
import { makeTriggerId, makeContentId, getOpenState } from "./utils";
import { unrefElement } from "@vueuse/core";

interface NavigationMenuTriggerProps extends PrimitiveProps {
  disabled?: boolean;
}

const props = defineProps<NavigationMenuTriggerProps>();
defineOptions({
  inheritAttrs: false,
});

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const itemContext = inject(NAVIGATION_MENU_ITEM_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();
const triggerId = makeTriggerId(context!.baseId, itemContext!.value);
const contentId = makeContentId(context!.baseId, itemContext!.value);
const hasPointerMoveOpenedRef = ref(false);
const wasClickCloseRef = ref(false);

const open = computed(() => itemContext?.value === context?.modelValue.value);

onMounted(() => {
  itemContext!.triggerRef = triggerElement;
});

const handlePointerEnter = () => {
  wasClickCloseRef.value = false;
  itemContext!.wasEscapeCloseRef.value = false;
};

const handlePointerMove = (ev: PointerEvent) => {
  if (ev.pointerType === "mouse") {
    if (
      props.disabled ||
      wasClickCloseRef.value ||
      itemContext!.wasEscapeCloseRef.value ||
      hasPointerMoveOpenedRef.value
    )
      return;
    context!.onTriggerEnter(itemContext!.value);
    hasPointerMoveOpenedRef.value = true;
  }
};

const handlePointerLeave = (ev: PointerEvent) => {
  if (ev.pointerType === "mouse") {
    if (props.disabled) return;
    context!.onTriggerLeave();
    hasPointerMoveOpenedRef.value = false;
  }
};

const handleClick = () => {
  if (open.value) {
    context?.onItemSelect("");
  } else {
    context?.onItemSelect(itemContext!.value);
  }
  wasClickCloseRef.value = open.value;
};

const handleKeydown = (ev: KeyboardEvent) => {
  const verticalEntryKey = context!.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
  const entryKey = { horizontal: "ArrowDown", vertical: verticalEntryKey }[
    context!.orientation
  ];
  if (open.value && ev.key === entryKey) {
    itemContext!.onEntryKeyDown();
    // Prevent FocusGroupItem from handling the event
    ev.preventDefault();
    ev.stopPropagation();
  }
};

const setFocusProxyRef = (node: VNode) => {
  // @ts-ignore
  itemContext!.focusProxyRef.value = unrefElement(node);
  return undefined;
};

const handleVisuallyHiddenFocus = (ev: FocusEvent) => {
  const content = // @ts-ignore
    (itemContext!.contentRef.value?.children?.[0].el as HTMLElement)
      .parentElement;
  const prevFocusedElement = ev.relatedTarget as HTMLElement | null;

  const wasTriggerFocused = prevFocusedElement === triggerElement.value;
  const wasFocusFromContent = content?.contains(prevFocusedElement);

  if (wasTriggerFocused || !wasFocusFromContent) {
    itemContext!.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
  }
};
</script>

<template>
  <PrimitiveButton
    ref="primitiveElement"
    :id="triggerId"
    :disabled="disabled"
    :data-disabled="disabled ? '' : undefined"
    :data-state="getOpenState(open)"
    :aria-expanded="open"
    :aria-controls="contentId"
    :as-child="props.asChild"
    @pointerenter="handlePointerEnter"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @click="handleClick"
    @keydown="handleKeydown"
    v-bind="$attrs"
    data-radix-vue-collection-item
  >
    <slot></slot>
  </PrimitiveButton>

  <template v-if="open">
    <VisuallyHidden
      aria-hidden
      :tabIndex="0"
      :ref="setFocusProxyRef"
      @focus="handleVisuallyHiddenFocus"
    >
    </VisuallyHidden>
    <span :aria-owns="contentId" v-if="context?.viewport"></span>
  </template>
</template>
