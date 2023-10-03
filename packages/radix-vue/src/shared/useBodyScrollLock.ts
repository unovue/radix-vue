import {
  createGlobalState,
  defaultDocument,
  useScrollLock,
} from '@vueuse/core'
import { isClient } from '@vueuse/shared'
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'

const useBodyLockStackCount = createGlobalState(() => ref(0))

export function useBodyScrollLock(initialState?: boolean | undefined) {
  const stack = useBodyLockStackCount()
  const locked = useScrollLock(defaultDocument?.body, false)

  const writableLock = computed<boolean>({
    get() {
      return locked.value
    },
    set(newLocked) {
      if (!isClient)
        return

      if (newLocked) {
        const verticalScrollbarWidth
          = window.innerWidth - document.documentElement.clientWidth

        if (verticalScrollbarWidth > 0) {
          document.body.style.paddingRight = `${verticalScrollbarWidth}px`
          document.head.style.setProperty('--scrollbar-width', `${verticalScrollbarWidth}px`)
        }

        // let dismissibleLayer set previous pointerEvent first
        nextTick(() => {
          document.body.style.pointerEvents = 'none'
          locked.value = true
        })
      }
      else {
        document.body.style.paddingRight = ''
        document.body.style.pointerEvents = ''
        document.head.style.removeProperty('--scrollbar-width')
        locked.value = false
      }
    },
  })

  if (initialState) {
    stack.value++
    writableLock.value = initialState
  }

  onBeforeUnmount(() => {
    if (!initialState)
      return
    stack.value--
    if (stack.value === 0) {
      document.body.style.paddingRight = ''
      document.body.style.pointerEvents = ''
      document.head.style.removeProperty('--scrollbar-width')
    }
  })

  return writableLock
}
