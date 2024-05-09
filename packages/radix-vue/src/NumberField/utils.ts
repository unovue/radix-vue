import { NumberFormatter, NumberParser } from '@internationalized/number'
import { createEventHook } from '@vueuse/shared'
import { type MaybeRef, ref, unref } from 'vue'

export function usePressedHold() {
  const timeout = ref<number>()
  const triggerHook = createEventHook()

  const resetTimeout = () => window.clearTimeout(timeout.value)

  const onIncrementPressStart = (delay: number) => {
    resetTimeout()
    triggerHook.trigger()

    timeout.value = window.setTimeout(() => {
    // TODO: add conditional
      onIncrementPressStart(60)
    }, delay)
  }

  const handlePressStart = () => {
    onIncrementPressStart(400)
  }

  const handlePressEnd = () => {
    resetTimeout()
  }

  return {
    handlePressStart,
    handlePressEnd,
    onTrigger: triggerHook.on,
  }
}

export function useNumberFormatter(options: MaybeRef<Intl.NumberFormatOptions> = {}) {
  const locale = 'en-US'

  return new NumberFormatter(locale, unref(options))
}

export function useNumberParser(options: MaybeRef<Intl.NumberFormatOptions> = {}) {
  const locale = 'en-US'

  return new NumberParser(locale, unref(options))
}
