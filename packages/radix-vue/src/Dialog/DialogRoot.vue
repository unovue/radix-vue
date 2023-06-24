<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface DialogRootProps {
  defaultOpen?: boolean;
  open?: boolean;
}

export const DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<DialogProvideValue>;

export type DialogProvideValue = {
  open: Readonly<Ref<boolean>>;
  onOpenToggle(): void;
};
</script>

<script setup lang="ts">
import { provide, toRef } from "vue";

const props = withDefaults(defineProps<DialogRootProps>(), {
  open: false,
});
const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

provide<DialogProvideValue>(DIALOG_INJECTION_KEY, {
  open: toRef(() => props.open),
  onOpenToggle: () => {
    emit("update:open", !props.open);
  },
});
</script>

<template>
  <slot />
</template>
