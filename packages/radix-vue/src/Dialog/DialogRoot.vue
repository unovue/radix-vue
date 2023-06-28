<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface DialogRootProps {
  modelValue?: boolean;
  defaultOpen?: boolean;
  //open?: boolean;
}

export const DIALOG_INJECTION_KEY =
  Symbol() as InjectionKey<DialogProvideValue>;

export type DialogProvideValue = {
  open: Readonly<Ref<boolean>>;
  openModal(): void;
  closeModal(): void;
  triggerButton: Ref<HTMLElement>;
};
</script>

<script setup lang="ts">
import { provide, toRef, ref } from "vue";

const props = withDefaults(defineProps<DialogRootProps>(), {
  //open: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const triggerButton = ref<HTMLElement>();

provide<DialogProvideValue>(DIALOG_INJECTION_KEY, {
  open: toRef(() => props.modelValue),
  openModal: () => {
    emit("update:modelValue", true);
  },
  closeModal: () => {
    emit("update:modelValue", false);
  },
  triggerButton: triggerButton,
});
</script>

<template>
  <slot />
</template>
