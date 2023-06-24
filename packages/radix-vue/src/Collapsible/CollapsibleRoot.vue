<script lang="ts">
import type { Ref } from "vue";

export interface CollapsibleRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
  onOpenChange?(open: boolean): void;
}

export const COLLAPSIBLE_INJECTION_KEY = "Collapsible" as const;

export type CollapsibleProvideValue = {
  contentId: string;
  disabled?: Readonly<Ref<boolean>>;
  open: Ref<boolean>;
  onOpenToggle(): void;
};
</script>

<script setup lang="ts">
import { provide, ref, toRef } from "vue";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: false,
});

const open = ref(props.open); // TODO: potential smell

provide<CollapsibleProvideValue>(COLLAPSIBLE_INJECTION_KEY, {
  contentId: "1",
  disabled: toRef(() => props.disabled),
  open: open,
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
    <slot />
  </div>
</template>
