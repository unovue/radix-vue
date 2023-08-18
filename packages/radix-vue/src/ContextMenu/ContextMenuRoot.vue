<script lang="ts">
import type { Ref, InjectionKey } from "vue";
import type { Direction } from "../shared/types";

interface ContextMenuContextValue {
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
export interface ContextMenuRootEmits {
  (e: "update:open", value: boolean): void;
}
</script>

<script setup lang="ts">
import { provide, ref, toRefs } from "vue";
import { MenuRoot } from "@/Menu";

const props = withDefaults(defineProps<ContextMenuRootProps>(), {
  dir: "ltr",
  modal: true,
});
const emits = defineEmits<ContextMenuRootEmits>();
const { dir, modal } = toRefs(props);

const open = ref(false);

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
