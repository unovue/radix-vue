<script lang="ts">
export interface SelectTriggerProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, nextTick, onMounted } from "vue";
import { PrimitiveButton, usePrimitiveElement } from "@/Primitive";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import { PopperAnchor } from "@/Popper";

const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

async function handleClick(e: MouseEvent) {
  injectedValue?.showTooltip();
  await nextTick();
  if (injectedValue?.modelValue.value) {
    const selectedElement = injectedValue.itemsArray?.find((element) => {
      return (
        element.getAttribute("data-radix-vue-radio-value") ===
        injectedValue?.modelValue.value
      );
    }) as HTMLElement;
    injectedValue?.changeSelected(selectedElement);
  } else {
    injectedValue?.changeSelected(injectedValue.itemsArray?.[0]);
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.keyCode === 32) {
    handleClick(e)
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <PrimitiveButton type="button" ref="primitiveElement" :aria-expanded="injectedValue?.isOpen.value || false"
      :data-state="injectedValue?.isOpen.value ? 'open' : 'closed'" :as-child="false" @click="handleClick"
      @keydown.prevent="handleKeydown">
      <slot />
    </PrimitiveButton>
  </PopperAnchor>
</template>
