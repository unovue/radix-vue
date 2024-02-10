import { useKbd } from '@/shared'

export function isSegmentNavigationKey(key: string) {
  const kbd = useKbd()
  if (key === kbd.ARROW_RIGHT || key === kbd.ARROW_LEFT)
    return true
  return false
}

export function isNumberString(value: string) {
  if (Number.isNaN(Number.parseInt(value)))
    return false
  return true
}

export function isAcceptableSegmentKey(key: string) {
  const kbd = useKbd()
  const acceptableSegmentKeys = [
    kbd.ENTER,
    kbd.ARROW_UP,
    kbd.ARROW_DOWN,
    kbd.ARROW_LEFT,
    kbd.ARROW_RIGHT,
    kbd.BACKSPACE,
    kbd.SPACE,
  ]
  if (acceptableSegmentKeys.includes(key))
    return true
  if (isNumberString(key))
    return true
  return false
}
