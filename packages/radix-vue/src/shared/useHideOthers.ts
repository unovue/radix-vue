import { type MaybeElementRef, unrefElement } from '@vueuse/core'
import { hideOthers } from 'aria-hidden'
import { onUnmounted, watch } from 'vue'

export function useHideOthers(target: MaybeElementRef) {
  let undo: ReturnType<typeof hideOthers>

  watch(() => unrefElement(target), (el) => {
    if (el)
      undo = hideOthers(el)
    else if (undo)
      undo()
  })

  onUnmounted(() => {
    undo()
  })
}
