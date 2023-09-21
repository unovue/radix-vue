export const TOAST_SWIPE_START = 'toast.swipeStart'
export const TOAST_SWIPE_MOVE = 'toast.swipeMove'
export const TOAST_SWIPE_CANCEL = 'toast.swipeCancel'
export const TOAST_SWIPE_END = 'toast.swipeEnd'

export const VIEWPORT_NAME = 'ToastViewport'
export const VIEWPORT_DEFAULT_HOTKEY = ['F8']
export const VIEWPORT_PAUSE = 'toast.viewportPause'
export const VIEWPORT_RESUME = 'toast.viewportResume'

export type SwipeDirection = 'up' | 'down' | 'left' | 'right'

export function isDeltaInDirection(delta: { x: number; y: number },
  direction: SwipeDirection,
  threshold = 0) {
  const deltaX = Math.abs(delta.x)
  const deltaY = Math.abs(delta.y)
  const isDeltaX = deltaX > deltaY
  if (direction === 'left' || direction === 'right')
    return isDeltaX && deltaX > threshold
  else
    return !isDeltaX && deltaY > threshold
}

export function isHTMLElement(node: any): node is HTMLElement {
  return node.nodeType === node.ELEMENT_NODE
}

export function getAnnounceTextContent(container: HTMLElement) {
  const textContent: string[] = []
  const childNodes = Array.from(container.childNodes)

  childNodes.forEach((node) => {
    if (node.nodeType === node.TEXT_NODE && node.textContent)
      textContent.push(node.textContent)
    if (isHTMLElement(node)) {
      const isHidden = node.ariaHidden || node.hidden || node.style.display === 'none'
      const isExcluded = node.dataset.radixToastAnnounceExclude === ''

      if (!isHidden) {
        if (isExcluded) {
          const altText = node.dataset.radixToastAnnounceAlt
          if (altText)
            textContent.push(altText)
        }
        else {
          textContent.push(...getAnnounceTextContent(node))
        }
      }
    }
  })
  // We return a collection of text rather than a single concatenated string.
  // This allows SR VO to naturally pause break between nodes while announcing.
  return textContent
}