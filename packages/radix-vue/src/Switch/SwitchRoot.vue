<script lang="ts">
import type { Ref, InjectionKey } from "vue";

export interface SwitchRootProps {
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  modelValue?: boolean;
}

export const SWITCH_INJECTION_KEY =
  Symbol() as InjectionKey<SwitchProvideValue>;

export interface SwitchProvideValue {
  modelValue?: Readonly<Ref<boolean>>;
  toggleModelValue: (value: string) => void;
  disabled: boolean;
}
</script>

<script setup lang="ts">
import { provide } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<SwitchRootProps>(), {
  disabled: false,
  modelValue: undefined,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = useVModel(props, "modelValue", emit, {
  defaultValue: false,
  passive: true, // set passive to true so that if no props.modelValue was passed, it will still update
});

const toggleModelValue = () => {
  modelValue.value = !modelValue.value;
};

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  modelValue: modelValue,
  toggleModelValue,
  disabled: props.disabled,
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    toggleModelValue();
  }
}
</script>

<template>
  <div
    :value="modelValue"
    role="checkbox"
    :aria-checked="modelValue"
    :data-state="modelValue ? 'checked' : 'unchecked'"
    :data-disabled="props.disabled ? '' : undefined"
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-bind="modelValue"
      @change="toggleModelValue"
      :checked="modelValue"
      :name="props.name"
      @keydown="handleKeydown"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="modelValue ? 'checked' : 'unchecked'"
      :data-disabled="props.disabled ? '' : undefined"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
