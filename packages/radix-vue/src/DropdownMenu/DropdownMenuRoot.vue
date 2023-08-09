<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { Direction } from "../shared/types";

export interface DropdownMenuRootProps {
  open?: boolean;
  defaultOpen?: boolean;
  dir?: Direction;
  modal?: boolean;
}

export const DROPDOWN_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<DropdownMenuProvideValue>;

export type DropdownMenuProvideValue = {
  open: Readonly<Ref<boolean>>;
  onOpenChange(open: boolean): void;
  onOpenToggle(): void;
  triggerId: string;
  triggerElement: Ref<HTMLElement | undefined>;
  contentId: string;
  modal: Ref<boolean>;
  dir: Ref<Direction>;
};
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from "vue";
import { useVModel } from "@vueuse/core";
import { MenuRoot } from "@/Menu";
import { useId } from "@/shared";

const props = withDefaults(defineProps<DropdownMenuRootProps>(), {
  modal: true,
  dir: "ltr",
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  passive: true,
  defaultValue: props.defaultOpen ?? false,
});

const triggerElement = ref<HTMLElement>();

const { modal, dir } = toRefs(props);
provide<DropdownMenuProvideValue>(DROPDOWN_MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value) => {
    open.value = value;
  },
  onOpenToggle: () => {
    open.value = !open.value;
  },
  triggerId: useId(),
  triggerElement,
  contentId: useId(),
  modal,
  dir,
});
</script>

<template>
  <MenuRoot v-model:open="open" :dir="dir" :modal="modal">
    <slot />
  </MenuRoot>
</template>
