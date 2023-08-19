<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { RovingFocusItem, type RovingFocusItemProps } from "../";

interface Props extends RovingFocusItemProps {
  value: string;
  disabled?: boolean;
}
const props = defineProps<Props>();

const context = inject("rovingFocusDemo", {
  value: ref(""),
});
const isSelected = computed(() => context.value.value === props.value);
</script>

<template>
  <RovingFocusItem asChild :active="isSelected" :focusable="!disabled">
    <button
      class="border-2 border-blue-600 px-4 py-2 rounded-md"
      :class="{ 'bg-gray-900 text-white': isSelected }"
      @click="context.value.value = props.value"
      @focus="
        (event: FocusEvent) => {
          if (context.value.value !== undefined) {
            (event.target as HTMLElement)?.click();
          }
        }
      "
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </RovingFocusItem>
</template>
