<script lang="ts">
import type { InjectionKey, Ref, VNodeArrayChildren } from "vue";
type Direction = "ltr" | "rtl";

const SELECTION_KEYS = ["Enter", " "];
const FIRST_KEYS = ["ArrowDown", "PageUp", "Home"];
const LAST_KEYS = ["ArrowUp", "PageDown", "End"];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const SUB_OPEN_KEYS: Record<Direction, string[]> = {
  ltr: [...SELECTION_KEYS, "ArrowRight"],
  rtl: [...SELECTION_KEYS, "ArrowLeft"],
};
const SUB_CLOSE_KEYS: Record<Direction, string[]> = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"],
};

type MenuContextValue = {
  open: boolean;
  onOpenChange(open: boolean): void;
  content: Ref<HTMLElement | undefined>;
  onContentChange(content: Ref<HTMLElement | undefined>): void;
};

type MenuRootContextValue = {
  onClose(): ?void;
  isUsingKeyboard: Ref<boolean>;
  dir: Direction;
  modal: boolean;
};

interface MenuProps {
  children?: VNodeArrayChildren[0];
  open?: boolean;
  onOpenChange?(open: boolean): void;
  dir?: Direction;
  modal?: boolean;
}

export const MENU_ROOT_INJECTION_KEY =
  Symbol() as InjectionKey<MenuRootContextValue>;
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from "vue";

const props = withDefaults(defineProps<MenuProps>(), {
  dir: "ltr",
  modal: false,
});

const content = ref<HTMLElement>();

const isUsingKeyboard = ref(false);

const onOpenChange = () => {
  console.log("change");
};

// Capture phase ensures we set the boolean before any side effects execute
// in response to the key or pointer event as they might depend on this value.
const handleKeyDown = () => {
  isUsingKeyboard.value = true;
  document.addEventListener("pointerdown", handlePointer, {
    capture: true,
    once: true,
  });
  document.addEventListener("pointermove", handlePointer, {
    capture: true,
    once: true,
  });
};
const handlePointer = () => (isUsingKeyboard.value = false);

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown, { capture: true });
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown, { capture: true });
  document.removeEventListener("pointerdown", handlePointer, {
    capture: true,
  });
  document.removeEventListener("pointermove", handlePointer, {
    capture: true,
  });
});

provide(MENU_ROOT_INJECTION_KEY, {
  onClose: () => null,
  isUsingKeyboard,
  dir: props.dir,
  modal: props.modal,
});
</script>

<template></template>
