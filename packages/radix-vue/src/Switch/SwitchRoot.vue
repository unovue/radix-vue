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
}
</script>

<script setup lang="ts">
import { ref, provide, watch, toRef } from "vue";

const props = withDefaults(defineProps<SwitchRootProps>(), {
  disabled: false,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue ?? false);

watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});

provide<SwitchProvideValue>(SWITCH_INJECTION_KEY, {
  modelValue: toRef(() => modelValue.value),
  toggleModelValue: toggleModelValue,
});

function toggleModelValue() {
  modelValue.value = !modelValue.value;
}

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
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-model="modelValue"
      :checked="modelValue"
      :name="props.name"
      @keydown="handleKeydown"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="modelValue ? 'checked' : 'unchecked'"
      :data-disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
