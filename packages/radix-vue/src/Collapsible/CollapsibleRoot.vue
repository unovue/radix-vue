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
import { provide, toRef, watch, ref } from "vue";
import { PrimitiveDiv } from "@/Primitive";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: false,
});
const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = ref(props.open ?? false);

watch(open, (newValue: boolean) => {
  emit("update:open", !props.open);
});

provide<CollapsibleProvideValue>(COLLAPSIBLE_INJECTION_KEY, {
  contentId: "1",
  disabled: toRef(() => props.disabled),
  open: toRef(() => open.value),
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
