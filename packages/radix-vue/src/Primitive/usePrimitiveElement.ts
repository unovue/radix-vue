import { unrefElement } from '@vueuse/core'
import { type ComponentPublicInstance, computed, ref } from 'vue'

export function usePrimitiveElement() {
  const primitiveElement = ref<ComponentPublicInstance>()
  const currentElement = computed<HTMLElement>(() => primitiveElement.value?.$el.nodeName === '#text' ? primitiveElement.value.$el.nextElementSibling : unrefElement(primitiveElement))

  return {
    primitiveElement,
    currentElement,
  }
}
