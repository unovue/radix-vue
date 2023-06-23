<script setup lang="ts">
import { ref } from "vue";

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
});

const emits = defineEmits(["onCheckedChange"]);

let dataState: "checked" | "unchecked" | "indeterminate";
let dataDisabled: boolean;

const refChecked = ref(props.checked);

function handleChange(e: Event) {
  emits("onCheckedChange", e);
}
</script>

<template>
  <div
    :value="props.value"
    role="checkbox"
    :aria-checked="props.checked"
    :data-state="dataState"
  >
    <input
      type="checkbox"
      v-model="refChecked"
      :checked="refChecked"
      :name="props.name"
      aria-hidden="true"
      @change="handleChange"
      :disabled="props.disabled"
      :required="props.required"
      :data-state="dataState"
      :data-disabled="dataDisabled"
    />
    <span v-if="refChecked">
      <slot />
    </span>
  </div>
</template>

<style scoped>
div {
  position: relative;
}

input:checked + span {
  display: contents;
}

input:not(:checked) + span {
  display: none;
}

input {
  opacity: 0;
  position: absolute;
  inset: 0;
}
</style>
