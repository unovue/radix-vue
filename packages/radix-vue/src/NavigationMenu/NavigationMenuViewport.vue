<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import {
  computed,
  inject,
  watch,
  ref,
  type ComponentPublicInstance,
} from "vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { getOpenState } from "./utils";
import { unrefElement, useResizeObserver } from "@vueuse/core";
import { Presence } from "@/Presence";
import NavigationMenuContentImpl from "./NavigationMenuContentImpl.vue";

const { primitiveElement, currentElement } = usePrimitiveElement();

const context = inject(NAVIGATION_MENU_INJECTION_KEY);

const size = ref<{ width: number; height: number }>();

const open = computed(() => !!context?.modelValue.value);
// We persist the last active content value as the viewport may be animating out
// and we want the content to remain mounted for the lifecycle of the viewport.
const activeContentValue = computed(() =>
  open.value ? context!.modelValue.value : context!.previousValue.value
);

watch(currentElement, () => {
  context!.onViewportChange(currentElement.value);
});

const viewportContentList = computed(() =>
  // @ts-ignore
  Array.from(context?.viewportContent.value.values())
);

const content = ref<HTMLElement>();
useResizeObserver(content, () => {
  if (content.value) {
    size.value = {
      width: content.value.offsetWidth,
      height: content.value.offsetHeight,
    };
  }
});

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <Presence :present="open">
    <PrimitiveDiv
      v-bind="$attrs"
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
      <Presence
        v-for="node in viewportContentList"
        :key="node.props?.value"
        :present="activeContentValue === node.props?.value"
      >
        <NavigationMenuContentImpl
          :ref="(n: ComponentPublicInstance) => { 
              if(activeContentValue === node.props?.value && n) content = unrefElement(n.$el)
            }"
          v-bind="{ ...node.props, ...node.parentProps }"
        >
          <component :is="node"></component>
        </NavigationMenuContentImpl>
      </Presence>
    </PrimitiveDiv>
  </Presence>
</template>
