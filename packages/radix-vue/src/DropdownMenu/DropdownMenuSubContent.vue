<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import type { Side, MiddlewareData } from "@floating-ui/dom";

export const DROPDOWN_MENU_SUB_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuContentProvideValue>;

export type Boundary = Element | null | Array<Element | null>;

export interface DropdownMenuSubContentProps {
  asChild?: boolean;
  loop?: boolean; //false
  //onOpenAutoFocus?: void;
  //onCloseAutoFocus?: void;
  //onEscapeKeyDown?: void;
  //onPointerDownOutside?: void;
  //onInteractOutside?: void;
  forceMount?: boolean;
  side?: "top" | "right" | "bottom" | "left"; //"top"
  sideOffset?: number; //0
  align?: "start" | "center" | "end";
  alignOffset?: number; //"center"
  avoidCollisions?: boolean; //true
  collisionBoundary?: Boundary; //[]
  collisionPadding?: number | Partial<Record<Side, number>>; //0
  arrowPadding?: number; //0
  sticky?: "partial" | "always"; //"partial"
  hideWhenDetached?: boolean; //false
  class: string;
}

export type DropdownMenuContentProvideValue = {
  middlewareData: Ref<MiddlewareData>;
  floatPosition: Ref<Side>;
};

export type MenuContentProvider = {
  itemsArray: HTMLElement[];
};
</script>

<script setup lang="ts">
import { onMounted, inject, ref, watchEffect, watch, provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/vue";
import { useClickOutside } from "../shared/useClickOutside";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import {
  DROPDOWN_MENU_SUB_INJECTION_KEY,
  type DropdownMenuSubProvideValue,
} from "./DropdownMenuSub.vue";

const rootInjectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const injectedValue = inject<DropdownMenuSubProvideValue>(
  DROPDOWN_MENU_SUB_INJECTION_KEY
);

const props = withDefaults(defineProps<DropdownMenuSubContentProps>(), {
  side: "bottom",
  align: "center",
  orientation: "horizontal",
});

const DropdownMenuContentElement = ref<HTMLElement>();
onMounted(() => {
  injectedValue!.floatingElement.value = DropdownMenuContentElement.value;
});

const {
  floatingStyles,
  middlewareData,
  placement: floatPosition,
} = useFloating(injectedValue!.triggerElement, DropdownMenuContentElement, {
  placement: "left-start",
  middleware: [
    offset({ alignmentAxis: -5 }),
    flip(),
    shift(),
    arrow({ element: injectedValue?.arrowElement }),
  ],
  whileElementsMounted: autoUpdate,
});

watchEffect(() => {
  if (DropdownMenuContentElement.value) {
    if (injectedValue?.modelValue.value) {
      setTimeout(() => {
        document.querySelector("body")!.style.pointerEvents = "none";
        focusFirstRadixElement();
        fillItemsArray();
      }, 0);

      window.addEventListener("mousedown", closeDialogWhenClickOutside);
    } else {
      if (injectedValue?.triggerElement.value) {
        //handleCloseMenu();
      }
    }
  }
});

// watchers to close if hover over items not in subcontent
watch(rootInjectedValue?.selectedElement, () => {
  if (
    injectedValue?.modelValue.value &&
    injectedValue.itemsArray.length &&
    rootInjectedValue?.selectedElement.value
  ) {
    if (
      !injectedValue.itemsArray.includes(
        rootInjectedValue?.selectedElement.value
      )
    ) {
      injectedValue.hideTooltip();
      console.log("run");
    }
  }
});

function closeDialogWhenClickOutside(e: MouseEvent) {
  const clickOutside = useClickOutside(e, DropdownMenuContentElement.value);
  if (clickOutside) {
    injectedValue?.hideTooltip();
    window.removeEventListener("mousedown", closeDialogWhenClickOutside);
  }
}

function focusFirstRadixElement() {
  const allToggleItem = Array.from(
    DropdownMenuContentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  ) as HTMLElement[];
  if (allToggleItem.length) {
    rootInjectedValue!.selectedElement.value = allToggleItem[0];
    allToggleItem[0].focus();
  }
}

function fillItemsArray() {
  const allToggleItem = Array.from(
    DropdownMenuContentElement.value!.querySelectorAll(
      "[data-radix-vue-collection-item]:not([data-disabled])"
    )
  ) as HTMLElement[];
  injectedValue!.itemsArray = allToggleItem;
  return allToggleItem;
}

function handleCloseMenu() {
  document.querySelector("body").style.pointerEvents = "";
  setTimeout(() => {
    rootInjectedValue?.triggerElement.value.focus();
  }, 0);
}

provide<DropdownMenuContentProvideValue>(
  DROPDOWN_MENU_SUB_CONTENT_INJECTION_KEY,
  {
    middlewareData: middlewareData,
    floatPosition: floatPosition as Ref<Side>,
  }
);

provide<MenuContentProvider>("MenuContentProvider", {
  itemsArray: [],
});
</script>

<template>
  <div
    ref="DropdownMenuContentElement"
    v-if="injectedValue?.modelValue.value"
    style="min-width: max-content; will-change: transform; z-index: auto"
    :style="floatingStyles"
  >
    <PrimitiveDiv
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      :data-side="props.side"
      :data-align="props.align"
      :data-orientation="injectedValue.orientation"
      role="tooltip"
      :class="props.class"
      :asChild="props.asChild"
      style="pointer-events: auto"
    >
      <slot />
    </PrimitiveDiv>
  </div>
</template>
