<script setup lang="ts">
import { inject, computed } from "vue";
import type { Ref, WritableComputedRef } from "vue";

type DataState = "checked" | "unchecked";

const checked: Ref<string> | undefined = inject("refChecked");

const dataState: WritableComputedRef<DataState> = computed({
  get() {
    return checked!.value ? "checked" : "unchecked";
  },
  set(value) {
    checked!.value = value;
  },
});

function toggleChecked() {
  if (checked!.value === "checked") {
    dataState.value = "unchecked";
  } else {
    dataState.value = "checked";
  }
}
</script>

<template>
  <span :data-state="dataState" @click="toggleChecked">
    <slot />
  </span>
</template>
