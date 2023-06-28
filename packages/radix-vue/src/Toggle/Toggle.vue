<script lang="ts">
type DataState = "on" | "off";

export interface ToggleProps {
  defaultValue?: boolean;
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  defaultValue: false,
  modelValue: undefined,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = useVModel(props, "modelValue", emit, {
  defaultValue: props.defaultValue,
  passive: true, // set passive to true so that if no props.modelValue was passed, it will still update
});

const toggleModelValue = () => {
  modelValue.value = !modelValue.value;
};

const dataState = computed<DataState>(() => {
  return modelValue.value ? "on" : "off";
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
    :data-state="dataState"
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      @keydown="handleKeydown"
      v-bind="modelValue"
      @change="toggleModelValue"
      :checked="modelValue"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      :data-state="dataState"
      :data-disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
