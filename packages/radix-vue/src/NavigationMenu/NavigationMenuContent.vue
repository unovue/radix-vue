<script setup lang="ts">
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";
import { NAVIGATION_MENU_ITEM_INJECTION_KEY } from "./NavigationMenuItem.vue";
import { computed, inject, getCurrentInstance, watch, nextTick } from "vue";
import { getOpenState } from "./utils";
import NavigationMenuContentImpl from "./NavigationMenuContentImpl.vue";
import { Presence } from "@/Presence";
import { type PrimitiveProps } from "@/Primitive";

interface NavigationMenuContentProps extends PrimitiveProps {}

const props = defineProps<NavigationMenuContentProps>();

const emits = defineEmits<{
  (e: "pointerDownOutside", event: Event): void;
  (e: "focusOutside", event: Event): void;
  (e: "interactOutside", event: Event): void;
}>();

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
  onRootContentClose: itemContext!.onRootContentClose,
  ...props,
}));

const instance = getCurrentInstance();

watch(
  open,
  async () => {
    // Next tick to flush DOM for other dependent elements to mount
    await nextTick();
    // Everytime we remove mounted vnode using `v-if`, we would need to reset the vnode,
    // thus having this watcher is crucial is important for SSR
    // @ts-ignore
    const vnode = instance?.vnode.children?.default()?.[0];
    if (context?.viewport && vnode && itemContext?.triggerRef.value) {
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
  },
  { immediate: true, deep: true }
);

const handleEscape = () => {
  context!.onItemDismiss();
  itemContext!.triggerRef?.value?.focus();
  itemContext!.wasEscapeCloseRef.value = true;
};

const handlePointerDown = (ev: PointerEvent) => {
  emits("pointerDownOutside", ev);
  context?.onContentLeave();
};
</script>

<template>
  <Presence v-if="!context?.viewport.value" :present="open">
    <NavigationMenuContentImpl
      :data-state="getOpenState(open)"
      :style="{
        pointerEvents: !open && context?.isRootMenu ? 'none' : undefined,
      }"
      v-bind="{ ...$attrs, ...commonProps }"
      @escape="handleEscape"
      @pointerenter="context?.onContentEnter(itemContext!.value)"
      @pointerleave="context?.onContentLeave()"
      @pointerdown="handlePointerDown"
      @focus-outside="emits('focusOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
    >
      <slot></slot>
    </NavigationMenuContentImpl>
  </Presence>
</template>
