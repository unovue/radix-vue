<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ComputedRef } from "vue";

const type: "single" | "multiple" | undefined = inject("type");

const props = defineProps({
  defaultChecked: {
    type: Boolean,
    required: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  name: {
    type: String,
    required: false,
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

type DataState = "on" | "off";
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

const dataState: ComputedRef<DataState> = computed(() => {
  return refChecked.value ? "on" : "off";
});
</script>

<template>
  <div
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
      :data-state="dataState"
      :data-disabled="dataDisabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
