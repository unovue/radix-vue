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
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";
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
  <PrimitiveDiv
    :value="pressed"
    role="checkbox"
    :aria-checked="pressed"
    :data-state="dataState"
    :data-disabled="props.disabled"
    :as-child="props.asChild"
    style="position: relative"
  >
    <input
      type="checkbox"
      @keydown="handleKeydown"
      v-bind="pressed"
      @change="togglePressed"
      :checked="pressed"
      aria-hidden="true"
      :disabled="props.disabled"
      :data-state="dataState"
      :data-disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </PrimitiveDiv>
</template>
