import { type MaybeElementRef, unrefElement } from '@vueuse/core'
import { computed, toValue } from 'vue'

export function useFormControl(el: MaybeElementRef) {
// We set this to true by default so that events bubble to forms without JS (SSR)
  return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest('form')) : true)
}
