import {
  createGlobalState,
  defaultDocument,
  useScrollLock,
} from '@vueuse/core'
import { isClient } from '@vueuse/shared'
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { defu } from 'defu'
import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'

const useBodyLockStackCount = createGlobalState(() => ref(0))

export function useBodyScrollLock(initialState?: boolean | undefined) {
  const context = injectConfigProviderContext({
    scrollBody: ref(true),
  })

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

        const defaultConfig = { padding: verticalScrollbarWidth, margin: 0 }

        const config = context.scrollBody?.value
          ? typeof context.scrollBody.value === 'object'
            ? defu({
              padding: context.scrollBody.value.padding === true ? verticalScrollbarWidth : context.scrollBody.value.padding,
              margin: context.scrollBody.value.margin === true ? verticalScrollbarWidth : context.scrollBody.value.margin,
            }, defaultConfig)
            : defaultConfig
          : ({ padding: 0, margin: 0 })

        if (verticalScrollbarWidth > 0) {
          document.body.style.paddingRight = `${config.padding}px`
          document.body.style.marginRight = `${config.margin}px`
          document.body.style.setProperty('--scrollbar-width', `${verticalScrollbarWidth}px`)
        }

        // let dismissibleLayer set previous pointerEvent first
        nextTick(() => {
          document.body.style.pointerEvents = 'none'
          locked.value = true
        })
      }
      else {
        document.body.style.paddingRight = ''
        document.body.style.marginRight = ''
        document.body.style.pointerEvents = ''
        document.body.style.removeProperty('--scrollbar-width')
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
      document.body.style.marginRight = ''
      document.body.style.pointerEvents = ''
      document.body.style.removeProperty('--scrollbar-width')
    }
  })

  return writableLock
}
