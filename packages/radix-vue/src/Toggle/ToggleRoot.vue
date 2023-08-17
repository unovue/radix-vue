<script lang="ts">
import { computed, type ComputedRef, type InjectionKey, type Ref } from "vue";

export interface ToggleRootProps extends PrimitiveProps {
  /**
   * The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultValue?: boolean;

  /**
   * The controlled pressed state of the toggle.
   */
  pressed?: boolean;
  /**
   * Disables the trigger.
   */
  disabled?: boolean;
}

export const TOGGLE_INJECTION_KEY =
  Symbol() as InjectionKey<ToggleProvideValue>;

export interface ToggleProvideValue {
  modelValue?: Readonly<Ref<ToggleRootProps["pressed"]>>;
  dataState: ComputedRef<DataState>;
}

export type DataState = "on" | "off";
</script>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "@/Primitive";
import { useVModel } from "@vueuse/core";

const props = withDefaults(defineProps<ToggleRootProps>(), {
  pressed: undefined,
  disabled: false,
  as: "button",
});

const emits = defineEmits<{
  (e: "update:pressed", value: boolean): void;
}>();

const pressed = useVModel(props, "pressed", emits, {
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
  <Primitive
    :as-child="props.asChild"
    :as="as"
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
  </Primitive>
</template>
