<script setup lang="ts">
import { inject, onMounted } from "vue";
import {
  Primitive,
  usePrimitiveElement,
  type PrimitiveProps,
} from "@/Primitive";
import { PopperAnchor } from "@/Popper";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

export interface PopoverTriggerProps extends PrimitiveProps {}
const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: "button",
});

const context = inject(POPOVER_INJECTION_KEY);

const { primitiveElement, currentElement: triggerElement } =
  usePrimitiveElement();

onMounted(() => {
  context!.triggerElement.value = triggerElement.value;
});
</script>

<template>
  <component :is="context?.hasCustomAnchor.value ? '' : PopperAnchor" asChild>
    <Primitive
      :type="as === 'button' ? 'button' : undefined"
      ref="primitiveElement"
      aria-haspopup="dialog"
      :aria-expanded="context?.open.value"
      :aria-controls="context?.contentId"
      :data-state="context?.open.value ? 'open' : 'closed'"
      :as="as"
      :as-child="props.asChild"
      @click="context!.onOpenToggle"
    >
      <slot />
    </Primitive>
  </component>
</template>
