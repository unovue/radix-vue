<script lang="ts">
import { computed, type ComputedRef, type InjectionKey, type Ref } from "vue";

export interface ToggleRootProps extends PrimitiveProps {
  value?: boolean | null;
  defaultValue?: boolean;
  modelValue?: boolean;
  disabled?: boolean;
}

export const TOGGLE_INJECTION_KEY =
  Symbol() as InjectionKey<ToggleProvideValue>;

export interface ToggleProvideValue {
  modelValue?: Readonly<Ref<ToggleRootProps["modelValue"]>>;
  dataState: ComputedRef<DataState>;
}

export type DataState = "on" | "off";
</script>

<script setup lang="ts">
import { PrimitiveButton, type PrimitiveProps } from "@/Primitive";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<ToggleRootProps>(), {
  value: false,
  disabled: false,
});

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const pressed = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});

const togglePressed = () => {
  pressed.value = !pressed.value;
};

const dataState = computed<DataState>(() => {
  return pressed.value ? "on" : "off";
});

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    togglePressed();
  }
};
</script>

<template>
  <PrimitiveButton
    :as-child="props.asChild"
    :value="pressed"
    v-bind="pressed"
    role="checkbox"
    :aria-checked="pressed"
    :data-state="dataState"
    :data-disabled="props.disabled"
    :disabled="props.disabled"
    @click="togglePressed"
    @keydown="handleKeydown"
    style="position: relative"
  >
    <slot />
  </PrimitiveButton>
</template>
