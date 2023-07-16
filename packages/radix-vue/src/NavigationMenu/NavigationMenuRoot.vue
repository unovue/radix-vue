<script lang="ts">
import { type InjectionKey, type Ref } from "vue";
import type { Direction, Orientation } from "./utils";
import { onFocusOutside, useCollection, useId } from "@/shared";

export interface NavigationMenuProps {
  modelValue?: string;
  defaultValue?: string;
  changeValue?: (value: string) => void;
  dir?: Direction;
  orientation?: Orientation;
  /**
   * The duration from when the pointer enters the trigger until the tooltip gets opened.
   * @defaultValue 200
   */
  delayDuration?: number;
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @defaultValue 300
   */
  skipDelayDuration?: number;
}

interface VNodeWithParentProps extends VNode {
  parentProps: any;
}

export interface NavigationMenuContextValue {
  isRootMenu: boolean;
  modelValue: Ref<string>;
  previousValue: Ref<string>;
  baseId: string;
  dir: Direction;
  orientation: Orientation;
  rootNavigationMenu: Ref<HTMLElement | undefined>;
  indicatorTrack: Ref<HTMLElement | undefined>;
  onIndicatorTrackChange(indicatorTrack: HTMLElement | undefined): void;
  viewport: Ref<HTMLElement | undefined>;
  onViewportChange(viewport: HTMLElement | undefined): void;
  viewportContent: Ref<Map<string, VNodeWithParentProps>>;
  onViewportContentChange(
    contentValue: string,
    contentData: VNodeWithParentProps
  ): void;
  onViewportContentRemove(contentValue: string): void;
  onTriggerEnter(itemValue: string): void;
  onTriggerLeave(): void;
  onContentEnter(itemValue: string): void;
  onContentLeave(): void;
  onItemSelect(itemValue: string): void;
  // onItemDismiss(): void;
}

export const NAVIGATION_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<NavigationMenuContextValue>;
</script>

<script setup lang="ts">
import { onClickOutside, useDebounceFn, useVModel } from "@vueuse/core";
import { provide, ref, type VNode } from "vue";
import { PrimitiveNav, usePrimitiveElement } from "@/Primitive";

const props = withDefaults(defineProps<NavigationMenuProps>(), {
  modelValue: "",
  delayDuration: 200,
  skipDelayDuration: 300,
  orientation: "horizontal",
  dir: "ltr",
});

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue ?? "",
});
const previousValue = ref("");

const { primitiveElement, currentElement: rootNavigationMenu } =
  usePrimitiveElement();
const { createCollection } = useCollection();
createCollection();

const closeMenu = () => {
  modelValue.value = "";
};

onClickOutside(rootNavigationMenu, () => {
  closeMenu();
});
onFocusOutside(rootNavigationMenu, () => {
  closeMenu();
});

const indicatorTrack = ref<HTMLElement>();
const viewport = ref<HTMLElement>();
const viewportContent = ref<Map<string, VNodeWithParentProps>>(new Map());

const debouncedFn = useDebounceFn((val: string) => {
  previousValue.value = modelValue.value;
  modelValue.value = val;
}, props.delayDuration);

provide(NAVIGATION_MENU_INJECTION_KEY, {
  isRootMenu: true,
  modelValue,
  previousValue,
  baseId: useId(),
  dir: props.dir,
  orientation: props.orientation,
  rootNavigationMenu,
  indicatorTrack,
  onIndicatorTrackChange: (val) => {
    indicatorTrack.value = val;
  },
  viewport,
  onViewportChange: (val) => {
    viewport.value = val;
  },
  viewportContent,
  onViewportContentChange: (contentValue, contentData) => {
    const prev = viewportContent.value;
    viewportContent.value = new Map(prev.set(contentValue, contentData));
  },
  onViewportContentRemove: (contentValue) => {
    const prev = viewportContent.value;
    if (!prev.has(contentValue)) return prev;
    prev.delete(contentValue);
    viewportContent.value = new Map(prev);
  },
  onTriggerEnter: (val) => {
    debouncedFn(val);
  },
  onTriggerLeave: () => {
    debouncedFn("");
  },
  onContentEnter: (val) => {
    debouncedFn(val);
  },
  onContentLeave: () => {
    debouncedFn("");
  },
  onItemSelect: (val) => {
    // When selecting item we trigger update immediately
    previousValue.value = modelValue.value;
    modelValue.value = val;
  },
});
</script>

<template>
  <PrimitiveNav
    ref="primitiveElement"
    aria-label="Main"
    :data-orientation="orientation"
    :dir="dir"
  >
    <slot></slot>
  </PrimitiveNav>
</template>
