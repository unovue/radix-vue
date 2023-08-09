<script lang="ts">
export interface DropdownMenuTriggerProps extends PrimitiveProps {
  disabled?: boolean;
}
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import { MenuAnchor } from "@/Menu";

const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
  as: "button",
});

const context = inject<DropdownMenuProvideValue>(DROPDOWN_MENU_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  context!.triggerElement = triggerElement;
});
</script>

<template>
  <MenuAnchor asChild>
    <Primitive
      ref="primitiveElement"
      :id="context?.triggerId"
      :type="as === 'button' ? 'button' : undefined"
      :as-child="props.asChild"
      :as="as"
      aria-haspopup="menu"
      :aria-expanded="context?.open.value"
      :aria-controls="context?.open.value ? context?.contentId : undefined"
      :data-disabled="disabled ? '' : undefined"
      :disabled="disabled"
      :data-state="context?.open.value ? 'open' : 'closed'"
      @pointerdown="
        (event) => {
          // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
          // but not when the control key is pressed (avoiding MacOS right click)
          if (!disabled && event.button === 0 && event.ctrlKey === false) {
            context?.onOpenToggle();
            // prevent trigger focusing when opening
            // this allows the content to be given focus without competition
            if (!context?.open.value) event.preventDefault();
          }
        }
      "
      @keydown.enter.space.arrow-down="
        (event) => {
          if (disabled) return;
          if (['Enter', ' '].includes(event.key)) context?.onOpenToggle();
          if (event.key === 'ArrowDown') context?.onOpenChange(true);
          // prevent keydown from scrolling window / first focused item to execute
          // that keydown (inadvertently closing the menu)
          if (['Enter', ' ', 'ArrowDown'].includes(event.key))
            event.preventDefault();
        }
      "
    >
      <slot />
    </Primitive>
  </MenuAnchor>
</template>
