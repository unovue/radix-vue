<script lang="ts">
export interface MenuSubContextValue {
  contentId: string;
  triggerId: string;
  trigger: Ref<HTMLElement | undefined>;
  onTriggerChange(trigger: HTMLElement | undefined): void;
  parentMenuContext?: MenuContextValue;
}

export const MENU_SUB_INJECTION_KEY =
  Symbol() as InjectionKey<MenuSubContextValue>;

export interface MenuSubProps {
  open?: boolean;
}
</script>

<script setup lang="ts">
import {
  inject,
  provide,
  ref,
  watchEffect,
  type InjectionKey,
  type Ref,
} from "vue";
import { MENU_INJECTION_KEY, type MenuContextValue } from "./MenuRoot.vue";
import { useVModel } from "@vueuse/core";
import { PopperRoot } from "@/Popper";
import { useId } from "@/shared";

const props = defineProps<MenuSubProps>();
const emits = defineEmits<{
  (e: "update:open", payload: boolean): void;
}>();

const open = useVModel(props, "open", emits, {
  defaultValue: false,
  passive: true,
});

const parentMenuContext = inject(MENU_INJECTION_KEY);
const trigger = ref<HTMLElement>();
const content = ref<HTMLElement>();

// Prevent the parent menu from reopening with open submenus.
watchEffect((cleanupFn) => {
  if (parentMenuContext?.open.value === false) open.value = false;
  cleanupFn(() => (open.value = false));
});

provide(MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value) => {
    open.value = value;
  },
  content,
  onContentChange: (element) => {
    content.value = element;
  },
});

provide(MENU_SUB_INJECTION_KEY, {
  triggerId: useId(),
  contentId: useId(),
  trigger,
  onTriggerChange: (element) => {
    trigger.value = element;
  },
});
</script>

<template>
  <PopperRoot>
    <slot></slot>
  </PopperRoot>
</template>
