import { toValue, useEventListener } from '@vueuse/core'
import { type MaybeRef, type MaybeRefOrGetter } from 'vue'

interface UseHoverOptions {
  /**
   * The duration in milliseconds to wait for the hover
   *
   * @default 0
   */
  delayEnter?: number

  /**
   * Callback when the hover starts after delayEnter
   */
  onHoverEnter?: () => void

  /**
   * The duration in milliseconds to wait for the hover to end
   *
   * @default 0
   */
  delayLeave?: number

  /**
   * Callback when the hover ends after delayLeave
   */
  onHoverLeave?: () => void

  /**
   * If true, the hover delay will not be triggered.
   *
   * @default false
   */
  disabled?: MaybeRef<boolean>
}

/**
 * Tracks mouse hover within an element and after a delay triggers the handler
 *
 * @param el - The element to track mouse hover within.
 * @param options - The options for the hover.
 */
export function useHover(
  el: MaybeRefOrGetter<EventTarget | undefined>,
  options: UseHoverOptions = {},
) {
  const { delayEnter = 0, delayLeave = 0, disabled = false } = options

  let timeout: ReturnType<typeof setTimeout> | undefined

  function trigger(entering: boolean) {
    if (timeout) {
      clearTimeout(timeout)
      timeout = undefined
    }
    if (toValue(disabled))
      return
    const delay = entering ? delayEnter : delayLeave
    const fn = entering ? options.onHoverEnter : options.onHoverLeave
    timeout = setTimeout(() => fn?.(), delay)
  }

  useEventListener(el, 'mouseenter', () => trigger(true), { passive: true })
  useEventListener(el, 'mouseleave', () => trigger(false), { passive: true })
}
