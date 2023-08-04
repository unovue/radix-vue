<script lang="ts">
export interface SelectTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject, nextTick, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  SELECT_INJECTION_KEY,
  type SelectProvideValue,
} from "./SelectRoot.vue";
import { PopperAnchor } from "@/Popper";

const props = withDefaults(defineProps<SelectTriggerProps>(), {
  as: "button",
});
const injectedValue = inject<SelectProvideValue>(SELECT_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

async function handleClick() {
  injectedValue?.showTooltip();
  await nextTick();
  if (injectedValue?.modelValue.value && !injectedValue?.multiple) {
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
  if (
    e.key === "ArrowDown" ||
    e.key === "ArrowUp" ||
    e.key === "Enter" ||
    e.keyCode === 32
  ) {
    handleClick();
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <Primitive
      :type="as === 'button' ? 'button' : undefined"
      ref="primitiveElement"
      :aria-expanded="injectedValue?.isOpen.value || false"
      :data-state="injectedValue?.isOpen.value ? 'open' : 'closed'"
      :as-child="props.asChild"
      :as="as"
      @click="handleClick"
      @keydown.prevent="handleKeydown"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
