<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from "./NavigationMenuItem.vue";
import { computed, inject, getCurrentInstance, onMounted } from "vue";
import { getOpenState } from "./utils";
import NavigationMenuContentImpl from "./NavigationMenuContentImpl.vue";
import { Presence } from "@/Presence";

defineOptions({
  inheritAttrs: false,
});

const context = inject(NAVIGATION_MENU_INJECTION_KEY);
const itemContext = inject(NAVIGATION_MENU_ITEM_INJECTION_KEY);

const open = computed(() => itemContext?.value === context?.modelValue.value);

const commonProps = computed(() => ({
  value: itemContext!.value,
  triggerRef: itemContext!.triggerRef,
  focusProxyRef: itemContext!.focusProxyRef,
  wasEscapeCloseRef: itemContext!.wasEscapeCloseRef,
  onContentFocusOutside: itemContext!.onContentFocusOutside,
  // onRootContentClose: itemContext!.onRootContentClose,
}));

const instance = getCurrentInstance();

onMounted(() => {
  // @ts-ignore
  const vnode = instance?.vnode.children?.default()?.[0];
  if (context?.viewport && vnode) {
    vnode.props = {
      ...vnode.props,
      ...commonProps.value,
      triggerRef: itemContext!.triggerRef,
      focusProxyRef: itemContext!.focusProxyRef,
      wasEscapeCloseRef: itemContext!.wasEscapeCloseRef,
    };
    vnode.parentProps = instance.vnode.props;
    context.onViewportContentChange(itemContext!.value, vnode);
  }
});

const handleEscape = () => {
  itemContext!.wasEscapeCloseRef.value = true;
};
</script>

<template>
  <Presence v-if="!context?.viewport.value" :present="open">
    <NavigationMenuContentImpl
      :data-state="getOpenState(open)"
      :style="{
        pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
      }"
      v-bind="($attrs, commonProps)"
      @escape="handleEscape"
    >
      <slot></slot>
    </NavigationMenuContentImpl>
  </Presence>
</template>
