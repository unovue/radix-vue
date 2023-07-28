<script lang="ts">
import type { PrimitiveProps } from "@/Primitive";

export interface PopoverTriggerProps extends PrimitiveProps { }
</script>

<script setup lang="ts">
import { PopperAnchor } from "@/Popper";
import { Primitive, usePrimitiveElement } from "@/Primitive";
import { useInjected } from "@/shared/useInjected";
import { onMounted } from "vue";
import { POPOVER_INJECTION_KEY } from "./PopoverRoot.vue";

const props = withDefaults(defineProps<PopoverTriggerProps>(), {
  as: "button",
});

const { primitiveElement } = usePrimitiveElement();
const {
  contentId,
  open,
  dataState,
  setTriggerElement,
  hidePopover,
  showPopover,
} = useInjected(POPOVER_INJECTION_KEY);

onMounted(() => setTriggerElement(primitiveElement.value!));
</script>

<template>
  <PopperAnchor asChild>
    <Primitive type="button" ref="primitiveElement" :as="props.as" :aria-expanded="open || false"
      :aria-controls="contentId" aria-haspopup="dialog" :data-state="dataState" :as-child="props.asChild"
      @click="open ? showPopover() : hidePopover()">
      <slot />
    </Primitive>
  </PopperAnchor>
</template>
