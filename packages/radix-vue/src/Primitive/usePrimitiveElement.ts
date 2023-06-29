import { unrefElement } from "@vueuse/core";
import { computed, ref } from "vue";

export const usePrimitiveElement = () => {
  const primitiveElement = ref<HTMLElement>();
  const currentElement = computed(() => unrefElement(primitiveElement));

  return {
    primitiveElement,
    currentElement,
  };
};
