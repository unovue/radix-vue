<script lang="ts">
export interface DropdownMenuTriggerProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { inject, nextTick, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import {
  DROPDOWN_MENU_INJECTION_KEY,
  type DropdownMenuProvideValue,
} from "./DropdownMenuRoot.vue";
import { PopperAnchor } from "@/Popper";

const props = withDefaults(defineProps<DropdownMenuTriggerProps>(), {
  as: "button",
});

const injectedValue = inject<DropdownMenuProvideValue>(
  DROPDOWN_MENU_INJECTION_KEY
);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.modelValue.value) {
    injectedValue?.hideTooltip();
  } else {
    injectedValue?.showTooltip();
  }
}

async function handleKeydown(e: KeyboardEvent) {
  if (e.key === "ArrowDown" || e.key === "Enter" || e.keyCode === 32) {
    injectedValue?.showTooltip();
    await nextTick();
    injectedValue?.changeSelected(injectedValue.itemsArray?.[0]);
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <Primitive
      :type="as === 'button' ? 'button' : undefined"
      ref="primitiveElement"
      :aria-expanded="injectedValue?.modelValue.value || false"
      :data-state="injectedValue?.modelValue.value ? 'open' : 'closed'"
      :as-child="props.asChild"
      :as="as"
      @click="handleClick"
      @keydown.prevent="handleKeydown"
    >
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
