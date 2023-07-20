<script lang="ts">
export interface ToggleGroupRootProps extends PrimitiveProps {
  value?: string;
  defaultValue?: string;
  //onValueChange?: void;
  disabled?: boolean;
  rovingFocus?: boolean;
  loop: boolean;
  modelValue?: string | string[];
}
</script>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { PrimitiveDiv, type PrimitiveProps } from "@/Primitive";

const emits = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<ToggleGroupRootProps>(), {
  type: "single",
  disabled: false,
});

const pressed = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});
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
