import {
  createSharedComposable,
  useEventListener,
} from '@vueuse/core'
import { type Fn, isClient, isIOS, tryOnBeforeUnmount } from '@vueuse/shared'
import { computed, nextTick, ref, watch } from 'vue'
import { defu } from 'defu'
import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'

import { nanoid } from 'nanoid/non-secure'

const useBodyLockStackCount = createSharedComposable(() => {
  const map = ref<Map<string, boolean>>(new Map())
  const initialOverflow = ref<string | undefined>()

  const locked = computed(() => {
    for (const value of map.value.values()) {
      if (value)
        return true
    }
    return false
  })

  const context = injectConfigProviderContext({
    scrollBody: ref(true),
  })

  let stopTouchMoveListener: Fn | null = null

  const resetBodyStyle = () => {
    document.body.style.paddingRight = ''
    document.body.style.marginRight = ''
    document.body.style.pointerEvents = ''
    document.body.style.removeProperty('--scrollbar-width')
    document.body.style.overflow = initialOverflow.value ?? ''
    isIOS && stopTouchMoveListener?.()

    initialOverflow.value = undefined
  }

  watch(locked, (val, oldVal) => {
    if (!isClient)
      return

    if (!val) {
      if (oldVal)
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
  }, { immediate: true, flush: 'sync' })

  return map
})

export function useBodyScrollLock(initialState?: boolean | undefined) {
  const id = nanoid(6)
  const map = useBodyLockStackCount()

  map.value.set(id, initialState ?? false)

  const locked = computed({
    get: () => map.value.get(id) ?? false,
    set: value => map.value.set(id, value),
  })

  tryOnBeforeUnmount(() => {
    map.value.delete(id)
  })

  return locked
}
