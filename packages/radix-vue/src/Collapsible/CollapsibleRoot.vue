<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import { useId } from "@/shared";

export interface CollapsibleRootProps {
  asChild?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  disabled?: boolean;
}

export interface CollapsibleProvideValue {
  contentId: string;
  disabled?: Readonly<Ref<boolean>>;
  open: Readonly<Ref<boolean>>;
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
  contentId: useId(),
  disabled,
  open,
  onOpenToggle: () => {
    open.value = !open.value;
  },
});
</script>

<template>
  <PrimitiveDiv
    :asChild="props.asChild"
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <slot :open="open" />
  </PrimitiveDiv>
</template>
