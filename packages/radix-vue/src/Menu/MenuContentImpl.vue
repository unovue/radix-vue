<script lang="ts">
export interface MenuContentContextValue {
  onItemEnter(event: PointerEvent): void;
  onItemLeave(event: PointerEvent): void;
  onTriggerLeave(event: PointerEvent): void;
  searchRef: Ref<string>;
  pointerGraceTimerRef: Ref<number>;
  onPointerGraceIntentChange(intent: GraceIntent | null): void;
}

export const MENU_CONTENT_INJECTION_KEY =
  Symbol() as InjectionKey<MenuContentContextValue>;

export type MenuContentImplPrivateProps = {
  // onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"];
  // onDismiss?: DismissableLayerProps["onDismiss"];
  disableOutsidePointerEvents?: DismissableLayerProps["disableOutsidePointerEvents"];

  /**
   * Whether scrolling outside the `MenuContent` should be prevented
   * (default: `false`)
   */
  disableOutsideScroll?: boolean;

  /**
   * Whether focus should be trapped within the `MenuContent`
   * (default: false)
   */
  trapFocus?: FocusScopeProps["trapped"];
};
export interface MenuContentImplProps
  extends MenuContentImplPrivateProps,
    Omit<PopperContentProps, "dir" | "onPlaced"> {
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  // onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];

  /**
   * Whether keyboard navigation should loop around
   * @defaultValue false
   */
  // loop?: RovingFocusGroupProps["loop"];
  loop?: boolean;

  // onEntryFocus?: RovingFocusGroupProps["onEntryFocus"];
  // onEscapeKeyDown?: DismissableLayerProps["onEscapeKeyDown"];
  // onPointerDownOutside?: DismissableLayerProps["onPointerDownOutside"];
  // onFocusOutside?: DismissableLayerProps["onFocusOutside"];
  // onInteractOutside?: DismissableLayerProps["onInteractOutside"];
}

export interface MenuRootContentTypeProps
  extends Omit<MenuContentImplProps, keyof MenuContentImplPrivateProps> {}

export type MenuContentImplEmits = DismissableLayerEmits & {
  (e: "openAutoFocus", event: Event): void;
  (e: "closeAutoFocus", event: Event): void;
};
</script>

<script setup lang="ts">
import { FocusScope, type FocusScopeProps } from "@/FocusScope";
import {
  DismissableLayer,
  type DismissableLayerProps,
  type DismissableLayerEmits,
} from "@/DismissableLayer";
import { PopperContent, type PopperContentProps } from "@/Popper";
import { usePrimitiveElement } from "@/Primitive";
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from "./MenuRoot.vue";
import {
  inject,
  onUnmounted,
  ref,
  type Ref,
  type InjectionKey,
  provide,
  toRefs,
  watch,
} from "vue";
import { useNewCollection, useFocusGuards, useArrowNavigation } from "@/shared";
import {
  type GraceIntent,
  type Side,
  getOpenState,
  getNextMatch,
  isPointerInGraceArea,
  isMouseEvent,
  focusFirst,
  FIRST_LAST_KEYS,
  LAST_KEYS,
} from "./utils";

useFocusGuards();
const context = inject(MENU_INJECTION_KEY);
const rootContext = inject(MENU_ROOT_INJECTION_KEY);

const props = defineProps<MenuContentImplProps>();
const emits = defineEmits<MenuContentImplEmits>();
const { trapFocus, disableOutsidePointerEvents } = toRefs(props);

const searchRef = ref("");
const timerRef = ref(0);
const pointerGraceTimerRef = ref(0);
const pointerGraceIntentRef = ref<GraceIntent | null>(null);
const pointerDirRef = ref<Side>("right");
const lastPointerXRef = ref(0);
const currentItemId = ref<string | null>(null);

const { createCollection } = useNewCollection();
const { primitiveElement, currentElement: contentElement } =
  usePrimitiveElement();
const collectionItems = createCollection(contentElement);

watch(contentElement, (el) => {
  context!.onContentChange(el);
});

const handleTypeaheadSearch = (key: string) => {
  const search = searchRef.value + key;
  const items = collectionItems.value;
  const currentItem = document.activeElement;
  const currentMatch =
    items.find((item) => item === currentItem)?.textContent ?? "";
  const values = items.map((item) => item.textContent ?? "");
  const nextMatch = getNextMatch(values, search, currentMatch);
  const newItem = items.find((item) => item.textContent === nextMatch);

  // Reset `searchRef` 1 second after it was last updated
  (function updateSearch(value: string) {
    searchRef.value = value;
    window.clearTimeout(timerRef.value);
    if (value !== "")
      timerRef.value = window.setTimeout(() => updateSearch(""), 1000);
  })(search);

  if (newItem) {
    /**
     * Imperative focus during keydown is risky so we prevent React's batching updates
     * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
     */
    setTimeout(() => (newItem as HTMLElement).focus());
  }
};

onUnmounted(() => {
  window.clearTimeout(timerRef.value);
});

const isPointerMovingToSubmenu = (event: PointerEvent) => {
  const isMovingTowards =
    pointerDirRef.value === pointerGraceIntentRef.value?.side;

  return (
    isMovingTowards &&
    isPointerInGraceArea(event, pointerGraceIntentRef.value?.area)
  );
};

const handleMountAutoFocus = (event: Event) => {
  emits("openAutoFocus", event);

  // when opening, explicitly focus the content area only and leave
  // `onEntryFocus` in  control of focusing first item
  contentElement.value?.focus();

  // only focus first item when using keyboard
  if (rootContext?.isUsingKeyboardRef.value) {
    collectionItems.value?.[0]?.focus();
    event.preventDefault();
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  // submenu key events bubble through portals. We only care about keys in this menu.
  const target = event.target as HTMLElement;
  const isKeyDownInside =
    target.closest("[data-radix-menu-content]") === event.currentTarget;
  const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
  const isCharacterKey = event.key.length === 1;

  const el = useArrowNavigation(
    event,
    document.activeElement as HTMLElement,
    contentElement.value,
    {
      loop: false,
      arrowKeyOptions: "vertical",
      dir: rootContext?.dir.value,
      focus: true,
    }
  );
  if (el) return el?.focus();

  // prevent "Space" taken account into handleTypeahead
  if (event.code === "Space") return;

  if (isKeyDownInside) {
    // menus should not be navigated using tab key so we prevent it
    if (event.key === "Tab") event.preventDefault();
    if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
  }

  // focus first/last item based on key pressed
  if (event.target !== contentElement.value) return;
  if (!FIRST_LAST_KEYS.includes(event.key)) return;
  event.preventDefault();
  const candidateNodes = collectionItems.value;
  if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
  focusFirst(candidateNodes);
};

const handleBlur = (event: FocusEvent) => {
  // clear search buffer when leaving the menu
  // @ts-ignore
  if (!event?.currentTarget?.contains?.(event.target)) {
    window.clearTimeout(timerRef.value);
    searchRef.value = "";
  }
};

const handlePointerMove = (event: PointerEvent) => {
  if (!isMouseEvent(event)) return;
  const target = event.target as HTMLElement;
  const pointerXHasChanged = lastPointerXRef.value !== event.clientX;

  // We don't use `event.movementX` for this check because Safari will
  // always return `0` on a pointer event.
  if (
    (event?.currentTarget as HTMLElement)?.contains(target) &&
    pointerXHasChanged
  ) {
    const newDir = event.clientX > lastPointerXRef.value ? "right" : "left";
    pointerDirRef.value = newDir;
    lastPointerXRef.value = event.clientX;
  }
};

provide(MENU_CONTENT_INJECTION_KEY, {
  onItemEnter: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event)) event.preventDefault();
  },
  onItemLeave: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event)) return;
    contentElement.value?.focus();
    currentItemId.value = null;
  },
  onTriggerLeave: (event: PointerEvent) => {
    if (isPointerMovingToSubmenu(event)) event.preventDefault();
  },
  searchRef,
  pointerGraceTimerRef,
  onPointerGraceIntentChange: (intent: GraceIntent | null) => {
    pointerGraceIntentRef.value = intent;
  },
});
</script>

<template>
  <FocusScope
    asChild
    :trapped="trapFocus"
    @mountAutoFocus="handleMountAutoFocus"
    @unmountAutoFocus="emits('closeAutoFocus', $event)"
  >
    <DismissableLayer
      asChild
      :disableOutsidePointerEvents="disableOutsidePointerEvents"
      @escapeKeyDown="emits('escapeKeyDown', $event)"
      @pointerDownOutside="emits('pointerDownOutside', $event)"
      @focusOutside="emits('focusOutside', $event)"
      @interactOutside="emits('interactOutside', $event)"
      @dismiss="emits('dismiss')"
    >
      <PopperContent
        v-bind="props"
        ref="primitiveElement"
        role="menu"
        aria-orientation="vertical"
        data-radix-menu-content
        :data-state="getOpenState(context!.open.value)"
        :dir="rootContext!.dir.value"
        @keydown="handleKeyDown"
        @blur="handleBlur"
        @pointermove="handlePointerMove"
      >
        <slot></slot>
      </PopperContent>
    </DismissableLayer>
  </FocusScope>
</template>
