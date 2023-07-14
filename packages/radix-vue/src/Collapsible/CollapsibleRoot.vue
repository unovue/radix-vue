<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export interface CollapsibleRootProps {
  asChild?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: void;
  disabled?: boolean;
}

export interface CollapsibleProvideValue {
  contentId: string;
  disabled?: Ref<boolean>;
  open: Ref<boolean>;
  onOpenToggle(): void;
}

export const COLLAPSIBLE_INJECTION_KEY =
  Symbol() as InjectionKey<CollapsibleProvideValue>;
</script>

<script setup lang="ts">
import { provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  asChild: false,
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
  <PrimitiveDiv
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? 'true' : undefined"
  >
    <slot :open="open" />
  </PrimitiveDiv>
</template>
