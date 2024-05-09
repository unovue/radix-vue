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

export function useNumberFormatter(locale: string = 'en-US', options: MaybeRef<Intl.NumberFormatOptions> = {}) {
  return new NumberFormatter(locale, unref(options))
}

export function useNumberParser(locale: string = 'en-US', options: MaybeRef<Intl.NumberFormatOptions> = {}) {
  return new NumberParser(locale, unref(options))
}
