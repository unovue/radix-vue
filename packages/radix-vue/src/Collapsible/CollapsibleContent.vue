<script lang="ts">
export interface CollapsibleContentProps {
  asChild?: boolean;
}
</script>

<script setup lang="ts">
import { inject, nextTick, onMounted, ref, watch } from "vue";
import {
  COLLAPSIBLE_INJECTION_KEY,
  type CollapsibleProvideValue,
} from "./CollapsibleRoot.vue";
import { PrimitiveDiv, usePrimitiveElement } from "@/Primitive";

const injectedValue = inject<CollapsibleProvideValue>(
  COLLAPSIBLE_INJECTION_KEY
);

const { primitiveElement, currentElement } = usePrimitiveElement();

const width = ref(0);
const height = ref(0);
const currentStyle = ref<Record<string, string>>();

// when opening we want it to immediately open to retrieve dimensions
// when closing we delay `present` to retrieve dimensions before closing
const isMountAnimationPrevented = ref(injectedValue?.open.value);
const isPresent = ref(false);
const hasAnimations = ref(false);

watch(
  () => [injectedValue?.open.value, currentElement.value],
  async () => {
    if (injectedValue?.open.value) {
      isPresent.value = true;
    } else if (!hasAnimations.value) {
      isPresent.value = false;
    }

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

onMounted(() => {
  const currentElementStyle = getComputedStyle(currentElement.value!);
  if (currentElementStyle?.animationName !== "none") {
    hasAnimations.value = true;
    currentElement.value?.addEventListener("animationend", () => {
      if (!injectedValue?.open.value) {
        isPresent.value = false;
      }
    });
  }

  requestAnimationFrame(() => {
    isMountAnimationPrevented.value = false;
  });
});

const props = withDefaults(defineProps<CollapsibleContentProps>(), {
  asChild: false,
});
</script>

<template>
  <PrimitiveDiv
    ref="primitiveElement"
    :asChild="props.asChild"
    :data-state="injectedValue?.open.value ? 'open' : 'closed'"
    :data-disabled="injectedValue?.disabled?.value ? '' : undefined"
    :id="injectedValue?.contentId"
    :hidden="!isPresent"
    :style="{
      [`--radix-collapsible-content-height`]: `${height}px`,
      [`--radix-collapsible-content-width`]: `${width}px`,
    }"
  >
    <template v-if="isPresent">
      <slot />
    </template>
  </PrimitiveDiv>
</template>
