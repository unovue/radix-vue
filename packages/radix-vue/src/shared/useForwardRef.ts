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

  let localExpose: Record<string, any> | null
  function forwardRef(ref: Element | ComponentPublicInstance | null) {
    currentRef.value = ref

    if (ref instanceof Element || !ref)
      return

    // support exposed values set in component
    if (instance.exposed && !localExpose) {
      localExpose = instance.exposed
      Object.entries(localExpose).forEach(([key, value]) => {
        // @ts-expect-error populate component public instance
        ref[key] = value
      })
    }

    instance.exposed = ref
    instance.exposeProxy = ref
  }

  return { forwardRef, currentRef, currentElement }
}
