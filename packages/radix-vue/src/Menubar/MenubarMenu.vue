<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "@/shared/types";

export interface MenubarMenuRootProps {
  value?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  //onOpenChange?: void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  orientation?: DataOrientation;
}

export const MENUBAR_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<MenubarMenuProvideValue>;

export type MenubarMenuProvideValue = {
  value: Readonly<Ref<boolean>>;
  showTooltip(): void;
  hideTooltip(): void;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  orientation: DataOrientation;
  triggerId: string;
  contentId: string;
  parentContext?: MenubarMenuProvideValue;
};
</script>

<script setup lang="ts">
import { inject, provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useId } from "@/shared";

const props = withDefaults(defineProps<MenubarMenuRootProps>(), {
  delayDuration: 700,
  orientation: "vertical",
});

const valueRef = ref(false);

const triggerElement = ref<HTMLElement>();

const parentContext = inject(MENUBAR_MENU_INJECTION_KEY);

provide<MenubarMenuProvideValue>(MENUBAR_MENU_INJECTION_KEY, {
  value: valueRef,
  showTooltip: () => {
    valueRef.value = true;
  },
  hideTooltip: () => {
    valueRef.value = false;
  },
  triggerElement,
  itemsArray: [],
  orientation: props.orientation,
  triggerId: useId(),
  contentId: useId(),
  parentContext,
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
