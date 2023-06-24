<script lang="ts">
import type { Ref } from "vue";

export interface CollapsibleRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
}

export const COLLAPSIBLE_INJECTION_KEY = "Collapsible" as const;

export type CollapsibleProvideValue = {
  contentId: string;
  disabled?: Readonly<Ref<boolean>>;
  open: Readonly<Ref<boolean>>;
  onOpenToggle(): void;
};
</script>

<script setup lang="ts">
import { provide, toRef } from "vue";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: false,
});
const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

provide<CollapsibleProvideValue>(COLLAPSIBLE_INJECTION_KEY, {
  contentId: "1",
  disabled: toRef(() => props.disabled),
  open: toRef(() => props.open),
  onOpenToggle: () => {
    emit("update:open", !props.open);
  },
});
</script>

<template>
  <div
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? 'true' : undefined"
  >
    <slot />
  </div>
</template>
