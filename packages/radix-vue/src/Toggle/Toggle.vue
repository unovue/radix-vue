<script lang="ts">
type DataState = "on" | "off";

export interface ToggleProps {
  modelValue?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue ?? false);

watch(modelValue, (newValue) => {
  emit("update:modelValue", newValue);
});

const dataState = computed<DataState>(() => {
  return modelValue.value ? "on" : "off";
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    modelValue.value = !modelValue.value;
  }
}
</script>

<template>
  <div
    :value="props.modelValue"
    role="checkbox"
    :aria-checked="modelValue"
    :data-state="dataState"
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      @keydown="handleKeydown"
      v-model="modelValue"
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
