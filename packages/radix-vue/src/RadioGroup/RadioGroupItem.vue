<script setup lang="ts">
import { ref, inject, computed, provide } from "vue";
import type { Ref } from "vue";
import {
  RADIO_GROUP_INJECTION_KEY,
  type RadioGroupProvideValue,
} from "./RadioGroupRoot.vue";

interface RadioGroupItemProps {
  value?: string;
}

const injectedValue = inject<RadioGroupProvideValue>(RADIO_GROUP_INJECTION_KEY);

const props = defineProps<RadioGroupItemProps>();

provide("radioItemValue", props.value);

const state = computed(() => {
  return injectedValue?.modelValue?.value === props.value ? "on" : "off";
});

function changeTab(value: string) {
  injectedValue?.changeModelValue(value);
}

const currentRadioElement: Ref<HTMLElement> = ref();

function handleKeydown(e: KeyboardEvent) {
  const allRadioItem = Array.from(
    injectedValue?.parentElement.value.querySelectorAll(
      "[data-radix-vue-collection-item]"
    )
  );
  if (allRadioItem.length) {
    const currentTabIndex = allRadioItem.indexOf(currentRadioElement.value);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (allRadioItem[currentTabIndex + 1]) {
        allRadioItem[currentTabIndex + 1].focus();
        changeTab(
          allRadioItem[currentTabIndex + 1].getAttribute(
            "data-radix-vue-radio-value"
          )
        );
      } else {
        allRadioItem[0].focus();
        changeTab(allRadioItem[0].getAttribute("data-radix-vue-radio-value"));
      }
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      if (allRadioItem[currentTabIndex - 1]) {
        allRadioItem[currentTabIndex - 1].focus();
        changeTab(
          allRadioItem[currentTabIndex - 1].getAttribute(
            "data-radix-vue-radio-value"
          )
        );
      } else {
        allRadioItem[allRadioItem.length - 1].focus();
        changeTab(
          allRadioItem[allRadioItem.length - 1].getAttribute(
            "data-radix-vue-radio-value"
          )
        );
      }
    }
  }
}
</script>

<template>
  <button
    type="button"
    :data-state="state"
    @click="injectedValue.changeModelValue(props.value)"
    :tabindex="`${
      injectedValue?.modelValue?.value === props.value ? '0' : '-1'
    }`"
    ref="currentRadioElement"
    @keydown="handleKeydown"
    data-radix-vue-collection-item
    :data-radix-vue-radio-value="props.value"
  >
    <slot />
  </button>
</template>
