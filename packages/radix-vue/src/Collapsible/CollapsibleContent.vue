<script lang="ts">
import { type PrimitiveProps } from "@/Primitive";

export interface CollapsibleContentProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed, inject, nextTick, ref, watch } from "vue";
import {
  COLLAPSIBLE_INJECTION_KEY,
  type CollapsibleProvideValue,
} from "./CollapsibleRoot.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";
import { Presence } from "@/Presence";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);

const presentRef = ref<InstanceType<typeof Presence>>();
const { primitiveElement, currentElement } = usePrimitiveElement();

const width = ref(0);
const height = ref(0);

// when opening we want it to immediately open to retrieve dimensions
// when closing we delay `present` to retrieve dimensions before closing
const isOpen = computed(() => injectedValue?.open.value);
const isMountAnimationPrevented = ref(isOpen.value);
const currentStyle = ref<Record<string, string>>();

watch(
  () => [isOpen.value, presentRef.value?.present],
  async () => {
    await nextTick();
    const node = currentElement.value;
    if (!node) return;
    currentStyle.value = currentStyle.value || {
      transitionDuration: node.style.transitionDuration,
      animationName: node.style.animationName,
    };
    // block any animations/transitions so the element renders at its full dimensions
    node.style.transitionDuration = "0s";
    node.style.animationName = "none";

    // get width and height from full dimensions
    const rect = node.getBoundingClientRect();
    height.value = rect.height;
    width.value = rect.width;

    // kick off any animations/transitions that were originally set up if it isn't the initial mount
    if (!isMountAnimationPrevented.value) {
      node.style.transitionDuration = currentStyle.value.transitionDuration;
      node.style.animationName = currentStyle.value.animationName;
    }
  },
  {
    immediate: true,
  }
);

requestAnimationFrame(() => {
  isMountAnimationPrevented.value = false;
});

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<CollapsibleContentProps>();
</script>

<template>
  <Presence ref="presentRef" :present="injectedValue!.open.value">
    <PrimitiveDiv
      ref="primitiveElement"
      v-bind="$attrs"
      :as-child="props.asChild"
      :data-state="injectedValue?.open.value ? 'open' : 'closed'"
      :data-disabled="injectedValue?.disabled?.value ? 'true' : undefined"
      :id="injectedValue?.contentId"
      :hidden="!injectedValue?.open"
      :style="{
        [`--radix-collapsible-content-height`]: `${height}px`,
        [`--radix-collapsible-content-width`]: `${width}px`,
      }"
    >
      <slot />
    </PrimitiveDiv>
  </Presence>
</template>
