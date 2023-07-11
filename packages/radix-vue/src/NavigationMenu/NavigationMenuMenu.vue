<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { DataOrientation } from "../shared/types";

export interface NavigationMenuMenuRootProps {
  value?: string;
}

export const NAVIGATION_MENU_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<NavigationMenuMenuProvideValue>;

export type NavigationMenuMenuProvideValue = {
  value: string;
  isOpen: Ref<boolean>;
  triggerElement: Ref<HTMLElement | undefined>;
  itemsArray: HTMLElement[];
  triggerId: string;
  contentId: string;
  orientation: DataOrientation;
  parentContext?: NavigationMenuMenuProvideValue;
};
</script>

<script setup lang="ts">
import { computed, inject, provide, ref } from "vue";
import { PopperRoot } from "@/Popper";
import { useId } from "@/shared";
import { NAVIGATION_MENU_INJECTION_KEY } from "./NavigationMenuRoot.vue";

const props = defineProps<NavigationMenuMenuRootProps>();

const value = props.value ?? useId();
const rootInjectedValue = inject(NAVIGATION_MENU_INJECTION_KEY);

const triggerElement = ref<HTMLElement>();

const isOpen = computed(() => rootInjectedValue?.modelValue.value === value);

const parentContext = inject(NAVIGATION_MENU_MENU_INJECTION_KEY);
provide<NavigationMenuMenuProvideValue>(NAVIGATION_MENU_MENU_INJECTION_KEY, {
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
