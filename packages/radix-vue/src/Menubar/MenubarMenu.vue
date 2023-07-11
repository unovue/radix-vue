<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "../shared/types";

export interface MenubarMenuRootProps {
  value?: string;
}

export const MENUBAR_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<MenubarMenuProvideValue>;

export type MenubarMenuProvideValue = {
  value: string;
  isOpen: Ref<boolean>;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  triggerId: string;
  contentId: string;
  orientation: DataOrientation;
  parentContext?: MenubarMenuProvideValue;
};
</script>

<script setup lang="ts">
import { computed, inject, provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useId } from "@/shared";
import { MENUBAR_INJECTION_KEY } from "./MenubarRoot.vue";

const props = defineProps<MenubarMenuRootProps>();

const value = props.value ?? useId();
const rootInjectedValue = inject(MENUBAR_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();

const isOpen = computed(() => rootInjectedValue?.modelValue.value === value);

const parentContext = inject(MENUBAR_MENU_INJECTION_KEY);
provide<MenubarMenuProvideValue>(MENUBAR_MENU_INJECTION_KEY, {
  value,
  isOpen,
  triggerElement,
  itemsArray: [],
  triggerId: value,
  contentId: useId(),
  parentContext,
  orientation: "vertical",
});
</script>

<template>
  <PopperRoot>
    <slot />
  </PopperRoot>
</template>
