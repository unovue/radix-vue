import { unrefElement } from '@vueuse/core'
import { type ComponentPublicInstance, computed, ref } from 'vue'

export function usePrimitiveElement() {
  const primitiveElement = ref<ComponentPublicInstance>()
  const currentElement = computed<HTMLElement>(() => ['#text', '#comment'].includes(primitiveElement.value?.$el.nodeName) ? primitiveElement.value?.$el.nextElementSibling : unrefElement(primitiveElement))

  return {
    primitiveElement,
    currentElement,
  }
}
