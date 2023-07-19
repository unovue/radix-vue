<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface SwitchRootProps extends PrimitiveProps {
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
  toggleOpen: () => void;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { provide } from "vue";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
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
  if (e.key === "Enter") {
    toggleOpen();
  }
}
</script>

<template>
  <PrimitiveDiv
    :value="open"
    role="switch"
    :aria-checked="open"
    :data-state="open ? 'checked' : 'unchecked'"
    :data-disabled="props.disabled ? '' : undefined"
    :as-child="props.asChild"
    style="position: relative"
  >
    <slot />
    <input
      type="checkbox"
      :id="props.id"
      v-bind="open"
      :name="props.name"
      @click="toggleOpen"
      @keydown="handleKeydown"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="open ? 'checked' : 'unchecked'"
      :data-disabled="props.disabled ? '' : undefined"
      style="opacity: 0; position: absolute; inset: 0"
    />
  </PrimitiveDiv>
</template>
