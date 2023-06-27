<script lang="ts">
import type { InjectionKey, Ref } from "vue";

export interface CollapsibleRootProps {
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
import { provide, ref, toRef, watch } from "vue";

const props = withDefaults(defineProps<CollapsibleRootProps>(), {
  open: undefined,
});

const emit = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const open = ref(props.open ?? false);

watch(open, (newValue: boolean) => {
  emit("update:open", newValue);
});

provide<CollapsibleProvideValue>(COLLAPSIBLE_INJECTION_KEY, {
  contentId: "1",
  disabled: toRef(() => props.disabled),
  open: props.open !== undefined ? toRef(() => props.open) : open,
  onOpenToggle: () => {
    open.value = !open.value;
    emit("update:open", !props.open);
  },
});
</script>

<template>
  <div
    :data-state="props.open ? 'open' : 'closed'"
    :data-disabled="props.disabled ? 'true' : undefined"
  >
    <slot :open="props.open" />
  </div>
</template>
