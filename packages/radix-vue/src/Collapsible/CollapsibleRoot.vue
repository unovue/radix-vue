<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export interface CollapsibleRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
}

export type CollapsibleProvideValue = {
  contentId: string;
  disabled?: Readonly<Ref<boolean>>;
  open: Readonly<Ref<boolean>>;
  onOpenToggle(): void;
};

export const COLLAPSIBLE_INJECTION_KEY =
  Symbol() as InjectionKey<CollapsibleProvideValue>;
</script>

<script setup lang="ts">
import { provide } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: undefined,
  defaultOpen: false,
});
const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true,
});
const disabled = useVModel(props, "disabled");

provide<CollapsibleProvideValue>(COLLAPSIBLE_INJECTION_KEY, {
  contentId: "1",
  disabled,
  open,
  onOpenToggle: () => {
    open.value = !open.value;
  },
});
</script>

<template>
  <div
    :data-state="open ? 'open' : 'closed'"
    :data-disabled="disabled ? 'true' : undefined"
  >
    <slot :open="open" />
  </div>
</template>
