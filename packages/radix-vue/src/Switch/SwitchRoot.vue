<script setup lang="ts">
import { ref, provide } from "vue";

defineOptions({
  inheritAttrs: true,
});

const props = defineProps({
  defaultChecked: {
    type: Boolean,
    required: false,
  },
  checked: {
    type: Boolean,
    required: false,
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
});

const emits = defineEmits(["onCheckedChange"]);

let dataState: "checked" | "unchecked";
let dataDisabled: boolean;

const refChecked = ref(props.checked);

provide("refChecked", refChecked);

function handleChange(e: Event) {
  emits("onCheckedChange", e);
}
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
      @change="handleChange"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="dataState"
      :data-disabled="dataDisabled"
      style="opacity: 0; position: absolute; inset: 0"
    />
    <slot />
  </div>
</template>
