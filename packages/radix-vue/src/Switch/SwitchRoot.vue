<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface SwitchRootProps {
  asChild?: boolean;
  defaultChecked?: boolean;
  checked?: boolean;
  // onCheckedChange?: void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  defaultOpen?: boolean;
  open?: boolean;
}

export const SWITCH_INJECTION_KEY =
  Symbol() as InjectionKey<SwitchProvideValue>;

export interface SwitchProvideValue {
  open?: Readonly<Ref<boolean>>;
  toggleOpen: (value: string) => void;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { provide } from "vue";
import { PrimitiveDiv } from "@/Primitive";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<SwitchRootProps>(), {
  asChild: false,
  disabled: false,
  defaultOpen: false,
  open: undefined,
});

const emit = defineEmits(["update:open"]);

const open = useVModel(props, "open", emit, {
  defaultValue: props.defaultOpen,
  passive: true, // set passive to true so that if no props.modelValue was passed, it will still update
});

const toggleOpen = () => {
  open.value = !open.value;
};

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  open: open,
  toggleOpen,
  disabled: props.disabled,
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.keyCode === 32) {
    toggleOpen();
  }
}
</script>

<template>
  <PrimitiveDiv
    :value="open"
    role="checkbox"
    :aria-checked="open"
    :data-state="open ? 'checked' : 'unchecked'"
    :data-disabled="props.disabled ? '' : undefined"
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-bind="open"
      @change="toggleOpen"
      :checked="open"
      :name="props.name"
      @keydown="handleKeydown"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="open ? 'checked' : 'unchecked'"
      :data-disabled="props.disabled ? '' : undefined"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </PrimitiveDiv>
</template>
