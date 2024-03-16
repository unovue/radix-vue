export type AcceptableValue = string | number | boolean | Record<string, any>
export type ArrayOrWrapped<T> = T extends any[] ? T : Array<T>

export function queryCheckedElement(parentEl: HTMLElement | null) {
  return parentEl?.querySelector('[data-state=checked]') as HTMLElement | null
}
