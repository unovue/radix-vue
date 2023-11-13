import {
  createGlobalState,
} from '@vueuse/core'
import { isClient } from '@vueuse/shared'
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { defu } from 'defu'
import { injectConfigProviderContext } from '@/ConfigProvider/ConfigProvider.vue'

const useInitialOverflowStyle = createGlobalState(() => ref<string | undefined>())
const useBodyLockStackCount = createGlobalState(() => ref(0))

export function useBodyScrollLock(initialState?: boolean | undefined) {
  const context = injectConfigProviderContext({
    scrollBody: ref(true),
  })

  const stack = useBodyLockStackCount()
  const initialOverflow = useInitialOverflowStyle()

  const locked = ref(initialState)

  const resetBodyStyle = () => {
    document.body.style.paddingRight = ''
    document.body.style.marginRight = ''
    document.body.style.pointerEvents = ''
    document.body.style.removeProperty('--scrollbar-width')
    document.body.style.overflow = initialOverflow.value ?? ''
    initialOverflow.value = undefined
  }

  if (initialState)
    stack.value++

  watch(locked, (val) => {
    if (!isClient)
      return

    if (val) {
      if (initialOverflow.value === undefined)
        initialOverflow.value = document.body.style.overflow

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
        document.body.style.overflow = 'hidden'
      }

      // let dismissibleLayer set previous pointerEvent first
      nextTick(() => {
        document.body.style.pointerEvents = 'none'
        document.body.style.overflow = 'hidden'
      })
    }
  }, { immediate: true })

  onBeforeUnmount(() => {
    if (initialState)
      stack.value--

    if (stack.value === 0)
      resetBodyStyle()
  })

  return locked
}
