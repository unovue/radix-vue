// reference: https://github.com/vuejs/rfcs/issues/258#issuecomment-1068697672
import { unrefElement } from '@vueuse/core'
import { type ComponentPublicInstance, computed, getCurrentInstance, ref } from 'vue'

export function useForwardRef() {
  const instance = getCurrentInstance()!

  const currentRef = ref<Element | ComponentPublicInstance | null>()
  const currentElement = computed(() => {
    // @ts-expect-error ignore ts error
    return ['#text', '#comment'].includes(currentRef.value?.$el.nodeName) ? currentRef.value?.$el.nextElementSibling : unrefElement(currentRef)
  })

  function forwardRef(ref: Element | ComponentPublicInstance | null) {
    instance.exposed = ref
    instance.exposeProxy = ref

    currentRef.value = ref
  }

  return { forwardRef, currentRef, currentElement }
}
