<script setup lang="ts">
import { ref, computed, provide } from "vue";

const props = defineProps({
  defaultChecked: {
    type: Boolean,
    required: false,
  },
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  value: {
    type: Boolean,
    required: false,
    default: false,
  },
  id: {
    type: String,
    required: false,
  },
  modelValue: {
    type: Boolean,
    required: false,
    default: null,
  },
});

const emits = defineEmits(["onCheckedChange", "update:modelValue"]);

let dataState: "checked" | "unchecked";
let dataDisabled: boolean;

const modelPlaceHolder = ref(props.checked);

const refChecked = computed({
  get() {
    if (props.modelValue != null) {
      return props.modelValue;
    } else {
      return modelPlaceHolder.value;
    }
  },
  set(value) {
    if (props.modelValue != null) {
      emits("update:modelValue", value);
    } else {
      modelPlaceHolder.value = !modelPlaceHolder.value;
    }
  },
});

provide("refChecked", refChecked);
</script>

<template>
  <div
    :value="props.value"
    role="checkbox"
    :aria-checked="refChecked"
    :data-state="dataState"
    style="position: relative"
  >
    <input
      type="checkbox"
      :id="props.id"
      v-model="refChecked"
      :checked="refChecked"
      :name="props.name"
      aria-hidden="true"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="dataState"
      :data-disabled="dataDisabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
