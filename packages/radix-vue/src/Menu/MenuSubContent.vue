<script setup lang="ts">
import { inject } from "vue";
import MenuContentImpl, {
  type MenuContentImplProps,
} from "./MenuContentImpl.vue";
import { Presence } from "@/Presence";
import { MENU_INJECTION_KEY, MENU_ROOT_INJECTION_KEY } from "./MenuRoot.vue";
import { MENU_SUB_INJECTION_KEY } from "./MenuSub.vue";
import { usePrimitiveElement } from "@/Primitive";
import { SUB_CLOSE_KEYS } from "./utils";

interface MenuSubContentProps extends MenuContentImplProps {}

const props = defineProps<MenuSubContentProps>();

const context = inject(MENU_INJECTION_KEY);
const rootContext = inject(MENU_ROOT_INJECTION_KEY);
const subContext = inject(MENU_SUB_INJECTION_KEY);

const { primitiveElement, currentElement: subContentElement } =
  usePrimitiveElement();
</script>

<template>
  <Presence :present="context!.open.value">
    <MenuContentImpl
      ref="primitiveElement"
      :id="subContext!.contentId"
      :aria-labelledby="subContext!.triggerId"
      :align="'start'"
      :side="rootContext!.dir.value === 'rtl' ? 'left' : 'right'"
      :disableOutsidePointerEvents="false"
      :disableOutsideScroll="false"
      :trapFocus="false"
      @open-auto-focus="(event) => {
        if (rootContext!.isUsingKeyboardRef.value) subContentElement?.focus();
        event.preventDefault();
      }"
      @close-auto-focus.prevent
      @focus-outside="
        async (event) => {
          if (event.defaultPrevented) return;
          // We prevent closing when the trigger is focused to avoid triggering a re-open animation
          // on pointer interaction.
          if (event.target !== subContext!.trigger.value)
            context!.onOpenChange(false);
        }
      "
      @escape-key-down="
        (event) => {
          rootContext?.onClose();
          // ensure pressing escape in submenu doesn't escape full screen mode
          event.preventDefault();
        }
      "
      @keydown="(event: KeyboardEvent) => {
        // Submenu key events bubble through portals. We only care about keys in this menu.
        const isKeyDownInside = (event.currentTarget as HTMLElement)?.contains(event.target as HTMLElement);
        const isCloseKey = SUB_CLOSE_KEYS[rootContext!.dir.value].includes(event.key);
        if (isKeyDownInside && isCloseKey) {
          context!.onOpenChange(false);
          // We focus manually because we prevented it in `onCloseAutoFocus`
          subContext!.trigger.value?.focus();
          // prevent window from scrolling
          event.preventDefault();
        }
      }"
    >
      <slot></slot>
    </MenuContentImpl>
  </Presence>
</template>
