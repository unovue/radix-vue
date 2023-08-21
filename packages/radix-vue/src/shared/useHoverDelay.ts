// TODO - Migrate to useHover.ts
/**
 * Tracks mouse hover within an element and resolves a promise when the hover ends or a timeout occurs.
 * @param {MouseEvent} e - The hover event.
 * @param {HTMLElement} element - The element to track mouse hover within.
 * @param {number} [delayMs=500] - The duration in milliseconds to wait for the hover to end before resolving the promise.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the hover continues until the timeout ends, or `false` if the hover ends before the timeout.
 */
export async function useHoverDelay(
  e: MouseEvent,
  element: HTMLElement,
  delayMs = 500,
): Promise<boolean> {
  let isHovered = true
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  let resolvePromise: (value: boolean) => void

  const timeoutPromise = new Promise<boolean>((resolve) => {
    resolvePromise = resolve
    timeoutId = setTimeout(() => {
      cleanupEvents()
      resolve(isHovered)
    }, delayMs)
  })

  function handleMouseleave() {
    isHovered = false
    cleanupEvents()
    clearTimeout(timeoutId)
    timeoutId = undefined
    resolvePromise(false)
  }

  function cleanupEvents() {
    element.removeEventListener('mouseleave', handleMouseleave)
  }

  element.addEventListener('mouseleave', handleMouseleave)

  return timeoutPromise
}
