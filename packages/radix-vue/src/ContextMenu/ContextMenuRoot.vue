<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { Direction } from "../shared/types";

export interface ContextMenuContextValue {
  open: Ref<boolean>;
  onOpenChange(open: boolean): void;
  modal: Ref<boolean>;
  dir: Ref<Direction>;
}

export const CONTEXT_MENU_INJECTION_KEY =
  Symbol() as InjectionKey<ContextMenuContextValue>;

export interface ContextMenuRootProps {
  dir?: Direction;
  modal?: boolean;
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from "vue";
import { MenuRoot } from "@/Menu";

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  dir: "ltr",
  modal: true,
});
const { dir, modal } = toRefs(props);

const open = ref(false);
const emits = defineEmits<{ (e: "update:open", value: boolean): void }>();

provide(CONTEXT_MENU_INJECTION_KEY, {
  open,
  onOpenChange: (value: boolean) => {
    open.value = value;
    emits("update:open", value);
  },
  dir,
  modal,
});
</script>

<template>
  <MenuRoot v-model:open="open" :dir="dir" :modal="modal">
    <slot />
  </MenuRoot>
</template>
