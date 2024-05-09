import { createEventHook } from '@vueuse/shared'
import { ref } from 'vue'

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
