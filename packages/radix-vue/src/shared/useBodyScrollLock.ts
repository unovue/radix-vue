import {
  createGlobalState,
  useEventListener,
} from '@vueuse/core'
import { type Fn, isClient, isIOS } from '@vueuse/shared'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { defu } from 'defu'
import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'

const useInitialOverflowStyle = createGlobalState(() => ref<string | undefined>())

const useBodyLockStackCount = createGlobalState(() => {
  const count = ref(0)

  const context = injectConfigProviderContext({
    scrollBody: ref(true),
  })

  let stopTouchMoveListener: Fn | null = null

  const initialOverflow = useInitialOverflowStyle()

  const resetBodyStyle = () => {
    document.body.style.paddingRight = ''
    document.body.style.marginRight = ''
    document.body.style.pointerEvents = ''
    document.body.style.removeProperty('--scrollbar-width')
    document.body.style.overflow = initialOverflow.value ?? ''
    isIOS && stopTouchMoveListener?.()

    initialOverflow.value = undefined
  }

  watch(count, (val) => {
    if (!isClient)
      return

    if (val === 0) {
      resetBodyStyle()
      return
    }

    if (initialOverflow.value === undefined)
      initialOverflow.value = document.body.style.overflow

    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth
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
      document.body.style.overflow = 'hidden'
    }

    if (isIOS) {
      stopTouchMoveListener = useEventListener(
        document,
        'touchmove',
        (e: TouchEvent) => {
          if (e.target !== document.documentElement)
            return

          if (e.touches.length > 1)
            return
          e.preventDefault?.()
        },
        { passive: false },
      )
    }

    // let dismissibleLayer set previous pointerEvent first
    nextTick(() => {
      document.body.style.pointerEvents = 'none'
      document.body.style.overflow = 'hidden'
    })
  }, { immediate: true })

  return count
})

export function useBodyScrollLock(initialState?: boolean | undefined) {
  const locked = ref(initialState)
  const stack = useBodyLockStackCount()

  if (initialState)
    stack.value++

  watch(locked, (value, oldValue) => {
    if (value === oldValue)
      return

    if (value === true)
      stack.value++
    else
      stack.value--
  })

  onBeforeUnmount(() => {
    if (locked.value)
      stack.value--
  })

  return locked
}
