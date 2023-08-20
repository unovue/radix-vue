<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import { MENUBAR_INJECTION_KEY } from "./MenubarRoot.vue";
import { MENUBAR_MENU_INJECTION_KEY } from "./MenubarMenu.vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { MenuAnchor } from "@/Menu";
import { useArrowNavigation, useNewCollection } from "@/shared";

export interface MenubarTriggerProps extends PrimitiveProps {
  disabled?: boolean;
}

const context = inject(MENUBAR_INJECTION_KEY);
const menuContext = inject(MENUBAR_MENU_INJECTION_KEY);

withDefaults(defineProps<MenubarTriggerProps>(), {
  as: "button",
});

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();
const { injectCollection } = useNewCollection("menubar");
const collections = injectCollection();

const isFocused = ref(false);

const open = computed(() => context?.modelValue.value === menuContext?.value);

onMounted(() => {
  menuContext!.triggerElement = triggerElement;
});

const handleArrowNavigation = (event: KeyboardEvent) => {
  const activeElement = document.activeElement as HTMLElement;
  const parentElement = collections.value?.[0].parentElement;

  if (!activeElement || !parentElement) return;
  useArrowNavigation(event, activeElement, parentElement, {
    loop: context?.loop.value,
    dir: context?.dir.value,
    itemsArray: collections.value,
    focus: true,
  });
};
</script>

<template>
  <MenuAnchor asChild>
    <Primitive
      ref="primitiveElement"
      :as="as"
      :type="as === 'button' ? 'button' : undefined"
      role="menuitem"
      :id="menuContext?.triggerId"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-controls="open ? menuContext?.contentId : undefined"
      :data-highlighted="isFocused ? '' : undefined"
      :data-state="open ? 'open' : 'closed'"
      :data-disabled="disabled ? '' : undefined"
      :disabled="disabled"
      :data-value="menuContext?.value"
      data-radix-vue-collection-item
      @pointerdown="(event) => {
        // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
        // but not when the control key is pressed (avoiding MacOS right click)
        if (!disabled && event.button === 0 && event.ctrlKey === false) {
          context!.onMenuOpen(menuContext!.value);
          // prevent trigger focusing when opening
          // this allows the content to be given focus without competition
          if (!open) event.preventDefault();
        }
      }"
      @pointerenter="() => {
        const menubarOpen = Boolean(context!.modelValue.value);
        if (menubarOpen && !open) {
          context!.onMenuOpen(menuContext!.value);
          triggerElement?.focus()
        }
      }"
      @keydown.enter.space.arrow-down="(event) => {
        if (disabled) return;
          if (['Enter', ' '].includes(event.key)) context?.onMenuToggle(menuContext!.value);
          if (event.key === 'ArrowDown') context?.onMenuOpen(menuContext!.value);
          // prevent keydown from scrolling window / first focused item to execute
          // that keydown (inadvertently closing the menu)
          if (['Enter', ' ', 'ArrowDown'].includes(event.key)) {
            menuContext!.wasKeyboardTriggerOpenRef.value = true;
            event.preventDefault();
          }
      }"
      @keydown.arrow-right.arrow-left.home.end="handleArrowNavigation"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
      <slot></slot>
    </Primitive>
  </MenuAnchor>
</template>
