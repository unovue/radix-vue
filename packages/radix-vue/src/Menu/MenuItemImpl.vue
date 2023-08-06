<script lang="ts">
import { whenMouse } from "./utils";
export interface MenuItemImplProps extends PrimitiveProps {
  disabled?: boolean;
  textValue?: string;
}
</script>

<script setup lang="ts">
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { MENU_CONTENT_INJECTION_KEY } from "./MenuContentImpl.vue";
import { inject, nextTick, ref } from "vue";

const props = defineProps<MenuItemImplProps>();

const { primitiveElement, currentElement } = usePrimitiveElement();
const contentContext = inject(MENU_CONTENT_INJECTION_KEY);

const isFocused = ref(false);

const handlePointerMove = async (event: PointerEvent) => {
  await nextTick();
  if (event.defaultPrevented) return;
  whenMouse((event) => {
    if (props.disabled) {
      contentContext!.onItemLeave(event);
    } else {
      contentContext!.onItemEnter(event);
      if (!event.defaultPrevented) {
        const item = event.currentTarget;
        item && (item as HTMLElement).focus();
      }
    }
  });
};

const handlePointerLeave = async (event: PointerEvent) => {
  await nextTick();
  if (event.defaultPrevented) return;
  whenMouse((event) => contentContext!.onItemLeave(event));
};
</script>

<template>
  <Primitive
    ref="primitiveElement"
    role="menuitem"
    data-radix-vue-collection-item
    :data-highlighted="isFocused ? '' : undefined"
    :aria-disabled="disabled || undefined"
    :data-disabled="disabled ? '' : undefined"
    @pointermove="handlePointerMove"
    @pointerleave="handlePointerLeave"
    @focus="
      async (event) => {
        await nextTick();
        if (event.defaultPrevented) return;
        isFocused = true;
      }
    "
    @blur="
      async (event) => {
        await nextTick();
        if (event.defaultPrevented) return;
        isFocused = false;
      }
    "
  >
    <slot></slot>
  </Primitive>
</template>
