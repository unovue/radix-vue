<script setup lang="ts">
import { inject, onMounted, ref, watchEffect } from "vue";
import { SELECT_CONTENT_INJECTION_KEY } from "./SelectContentImpl.vue";
import { SELECT_VIEWPORT_INJECTION_KEY } from "./SelectViewport.vue";
import { usePrimitiveElement, type PrimitiveProps } from "@/Primitive";
import SelectScrollButtonImpl from "./SelectScrollButtonImpl.vue";

interface SelectScrollDownButtonProps extends PrimitiveProps {}
defineProps<SelectScrollDownButtonProps>();

const contentContext = inject(SELECT_CONTENT_INJECTION_KEY);
const viewportContext = inject(SELECT_VIEWPORT_INJECTION_KEY);

const { primitiveElement, currentElement } = usePrimitiveElement();

const canScrollUp = ref(false);

watchEffect((cleanupFn) => {
  if (contentContext!.viewport?.value && contentContext!.isPositioned) {
    const viewport = contentContext!.viewport.value;

    // eslint-disable-next-line no-inner-declarations
    function handleScroll() {
      canScrollUp.value = viewport.scrollTop > 0;
    }
    handleScroll();
    viewport.addEventListener("scroll", handleScroll);

    cleanupFn(() => viewport.removeEventListener("scroll", handleScroll));
  }
});

onMounted(() => {
  if (currentElement.value)
    viewportContext?.onScrollButtonChange(currentElement.value);
});
</script>

<template>
  <SelectScrollButtonImpl
    ref="primitiveElement"
    v-if="canScrollUp"
    @auto-scoll="() => {
        const { viewport, selectedItem } = contentContext!;
        if (viewport?.value && selectedItem?.value) {
          viewport.value.scrollTop = viewport.value.scrollTop - selectedItem.value.offsetHeight;
        }
  }"
  >
    <slot></slot>
  </SelectScrollButtonImpl>
</template>
