<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from "./NavigationMenuItem.vue";
import { computed, inject, onMounted, ref, type VNode } from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { getOpenState } from "./utils";
import { unrefElement, useResizeObserver } from "@vueuse/core";
import NavigationMenuContentImpl from "./NavigationMenuContentImpl.vue";

const { primitiveElement, currentElement } = usePrimitiveElement();

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const itemContext = inject(NAVIGATION_MENU_ITEM_INJECTION_KEY);

const content = ref<HTMLElement>();
const size = ref<{ width: number; height: number }>();

const open = computed(() => !!context?.modelValue.value);
// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const activeContentValue = computed(() =>
  open.value ? context!.modelValue.value : context!.previousValue.value
);

onMounted(() => {
  context!.onViewportChange(currentElement.value);
});

console.log(Array.from(context?.viewportContent.value.values()));
const viewportContentList = computed(() =>
  // @ts-ignore
  Array.from(context?.viewportContent.value.values()).filter(
    (node) => open.value && node?.props?.value === activeContentValue.value
  )
);

const setRef = (node: VNode) => {
  // @ts-ignore
  const isActive = activeContentValue.value === node?.value;
  if (isActive) {
    // @ts-ignore
    content.value = unrefElement(node);
  }
  return undefined;
};

useResizeObserver(content, () => {
  if (content.value) {
    size.value = {
      width: content.value.offsetWidth,
      height: content.value.offsetHeight,
    };
  }
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    :data-state="getOpenState(open)"
    :data-orientation="context?.orientation"
    :style="{
        // Prevent interaction when animating out
        pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
        ['--radix-navigation-menu-viewport-width' as any]: size ? size?.width + 'px' : undefined,
        ['--radix-navigation-menu-viewport-height' as any]: size ? size?.height + 'px' : undefined,
      }"
    @pointerenter="context?.onContentEnter(activeContentValue)"
    @pointerleave="context?.onContentLeave()"
  >
    <NavigationMenuContentImpl
      v-for="node in viewportContentList"
      :ref="setRef"
      :key="node.props?.value"
      v-bind="node.parentProps"
      :value="node.props?.value"
      :triggerRef="node.props?.triggerRef"
      :focusProxyRef="node.props?.focusProxyRef"
      @escape="itemContext!.wasEscapeCloseRef.value = true"
    >
      <component :is="node"></component>
    </NavigationMenuContentImpl>
  </PrimitiveDiv>
</template>
