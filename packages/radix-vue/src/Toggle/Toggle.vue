<script lang="ts">
type DataState = "on" | "off";

export interface ToggleProps extends PrimitiveProps {
  defaultPressed?: boolean;
  pressed?: boolean;
  // onPressedChange?: void;
  disabled?: boolean;

  // INTERNALS
  name?: string;
  id?: string;
}
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useVModel } from "@vueuse/core";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";

const props = withDefaults(defineProps<ToggleProps>(), {
  disabled: false,
  defaultPressed: false,
  pressed: undefined,
});

const emit = defineEmits(["update:pressed"]);

const pressed = useVModel(props, "pressed", emit, {
  defaultValue: props.defaultPressed,
  passive: true, // set passive to true so that if no props.pressed was passed, it will still update
});

const togglePressed = () => {
  pressed.value = !pressed.value;
};

const dataState = computed<DataState>(() => {
  return pressed.value ? "on" : "off";
});

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    togglePressed();
  }
}
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
      :id="props.id"
      @keydown="handleKeydown"
      v-bind="pressed"
      @change="togglePressed"
      :checked="pressed"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      :data-state="dataState"
      :data-disabled="props.disabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </PrimitiveDiv>
</template>
