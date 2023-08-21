export function useMouseleaveDelay(
  mouseleaveEvent: MouseEvent,
  duration = 300,
) {
  let isHovered = true
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  let resolvePromise: (value: boolean) => void

  const element = mouseleaveEvent.target as HTMLElement

  const timeoutPromise = new Promise<boolean>((resolve) => {
    resolvePromise = resolve
    timeoutId = setTimeout(() => {
      cleanupEvents()
      resolve(isHovered)
    }, duration)
  })

  function handleMouseenter() {
    isHovered = false
    cleanupEvents()
    clearTimeout(timeoutId)
    timeoutId = undefined
    resolvePromise(false)
  }

  function cleanupEvents() {
    element.removeEventListener('mouseenter', handleMouseenter)
  }

  element.addEventListener('mouseenter', handleMouseenter)

  return timeoutPromise
}
