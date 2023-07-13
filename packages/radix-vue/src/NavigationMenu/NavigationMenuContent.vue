<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from "./NavigationMenuItem.vue";
import {
  computed,
  inject,
  onMounted,
  ref,
  watch,
  type VNode,
  getCurrentInstance,
} from "vue";
import { getOpenState } from "./utils";
import NavigationMenuContentImpl from "./NavigationMenuContentImpl.vue";

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
  // onContentFocusOutside: itemContext!.onContentFocusOutside,
  // onRootContentClose: itemContext!.onRootContentClose,
}));

const elementRef = ref<VNode>();

watch(elementRef, () => {
  itemContext!.contentRef.value = elementRef.value;
});

const instance = getCurrentInstance();
onMounted(() => {
  // @ts-ignore
  const vnode = instance?.vnode.children?.default()?.[0];
  if (context?.viewport && vnode) {
    vnode.props = { ...vnode.props, ...commonProps.value };
    vnode.parentProps = instance.vnode.props;
    itemContext!.contentRef.value = vnode;
    context.onViewportContentChange(itemContext!.value, vnode);
  }
});
</script>

<template>
  <NavigationMenuContentImpl
    v-if="!context?.viewport"
    ref="elementRef"
    :data-state="getOpenState(open)"
    :style="{
      pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
    }"
    v-bind="($attrs, commonProps)"
    @escape="itemContext!.wasEscapeCloseRef.value = true"
  >
    <slot></slot>
  </NavigationMenuContentImpl>
</template>
