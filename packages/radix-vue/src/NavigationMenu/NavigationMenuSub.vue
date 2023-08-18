<script setup lang="ts">
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import type { Orientation } from "./utils";
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { inject, provide, ref, type Ref, type VNode } from "vue";
import { useVModel } from "@vueuse/core";
import { useNewCollection } from "@/shared";

interface VNodeWithParentProps extends VNode {
  parentProps: any;
}

export interface NavigationMenuSubProps extends PrimitiveProps {
  modelValue?: string;
  defaultValue?: string;
  orientation?: Orientation;
}
export interface NavigationMenuSubEmits {
  (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<NavigationMenuSubProps>(), {
  orientation: "horizontal",
});
const emits = defineEmits<NavigationMenuSubEmits>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue ?? "",
}) as Ref<string>;
const previousValue = ref("");

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const { primitiveElement, currentElement } = usePrimitiveElement();

const indicatorTrack = ref<HTMLElement>();
const viewport = ref<HTMLElement>();
const viewportContent = ref<Map<string, VNodeWithParentProps>>(new Map());

const { createCollection } = useNewCollection("nav");
createCollection(indicatorTrack);

provide(NAVIGATION_MENU_INJECTION_KEY, {
  ...context!,
  isRootMenu: false,
  modelValue,
  previousValue,
  orientation: props.orientation,
  rootNavigationMenu: currentElement,
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
  onTriggerEnter: (val) => {
    modelValue.value = val;
  },
  onTriggerLeave: () => {
    // do nothing for submenu
  },
  onContentEnter: () => {
    // do nothing for submenu
  },
  onContentLeave: () => {
    // do nothing for submenu
  },
  onItemSelect: (val) => {
    modelValue.value = val;
  },
  onItemDismiss: () => {
    modelValue.value = "";
  },
});
</script>

<template>
  <Primitive
    ref="primitiveElement"
    :data-orientation="orientation"
    :as-child="props.asChild"
    :as="as"
  >
    <slot></slot>
  </Primitive>
</template>
