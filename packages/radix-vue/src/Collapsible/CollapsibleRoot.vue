<script lang="ts">
import type { InjectionKey, Ref } from "vue";
import { type PrimitiveProps } from "@/Primitive";
import { useId } from "@/shared";

export interface CollapsibleRootProps extends PrimitiveProps {
  defaultOpen?: boolean;
  open?: boolean;
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
    :as-child="props.asChild"
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? '' : undefined"
  >
    <slot :open="open" />
  </PrimitiveDiv>
</template>
