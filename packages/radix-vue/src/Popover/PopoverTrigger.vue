<script lang="ts">
export interface PopoverTriggerProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { PopperAnchor } from "@/Popper";
import {
  POPOVER_INJECTION_KEY,
  type PopoverProvideValue,
} from "./PopoverRoot.vue";

const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: "button",
});

const injectedValue = inject<PopoverProvideValue>(POPOVER_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  injectedValue!.triggerElement.value = triggerElement.value;
});

function handleClick() {
  if (injectedValue?.open.value) {
    injectedValue?.hidePopover();
  } else {
    injectedValue?.showPopover();
  }
}
</script>

<template>
  <PopperAnchor asChild>
    <Primitive type="button" ref="primitiveElement" :as="props.as" :aria-expanded="injectedValue?.open.value || false"
      :aria-controls="injectedValue?.contentId" aria-haspopup="dialog" :data-state="injectedValue?.dataState.value"
      :as-child="props.asChild" @click="handleClick">
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
