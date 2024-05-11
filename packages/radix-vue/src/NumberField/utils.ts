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

export function handleDecimalOperation(operator: '-' | '+', value1: number, value2: number): number {
  let result = operator === '+' ? value1 + value2 : value1 - value2

  // Check if we have decimals
  if (value1 % 1 !== 0 || value2 % 1 !== 0) {
    const value1Decimal = value1.toString().split('.')
    const value2Decimal = value2.toString().split('.')
    const value1DecimalLength = (value1Decimal[1] && value1Decimal[1].length) || 0
    const value2DecimalLength = (value2Decimal[1] && value2Decimal[1].length) || 0
    const multiplier = 10 ** Math.max(value1DecimalLength, value2DecimalLength)

    // Transform the decimals to integers based on the precision
    value1 = Math.round(value1 * multiplier)
    value2 = Math.round(value2 * multiplier)

    // Perform the operation on integers values to make sure we don't get a fancy decimal value
    result = operator === '+' ? value1 + value2 : value1 - value2

    // Transform the integer result back to decimal
    result /= multiplier
  }

  return result
}
