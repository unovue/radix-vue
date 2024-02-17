import type { ResizeEvent } from './utils'

export function isKeyDown(event: ResizeEvent): event is KeyboardEvent {
  return event.type === 'keydown'
}

export function isMouseEvent(event: ResizeEvent): event is MouseEvent {
  return event.type.startsWith('mouse')
}

export function isTouchEvent(event: ResizeEvent): event is TouchEvent {
  return event.type.startsWith('touch')
}

export function getResizeEventCoordinates(event: ResizeEvent) {
  if (isMouseEvent(event)) {
    return {
      x: event.pageX,
      y: event.pageY,
    }
  }
  else if (isTouchEvent(event)) {
    const touch = event.touches[0]
    if (touch && touch.pageX && touch.pageY) {
      return {
        x: touch.pageX,
        y: touch.pageY,
      }
    }
  }

  return {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
  }
}
