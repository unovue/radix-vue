import { camelize, getCurrentInstance, toHandlerKey } from 'vue'

// Vue doesn't have emits forwarding, in order to bind the emits we have to convert events into `onXXX` handlers
// issue: https://github.com/vuejs/core/issues/5917
export function useEmitAsProps<TEventName extends string>(
  emit: (name: TEventName, ...args: any[]) => void,
) {
  const result: Record<string, (...args: any[]) => void> = {}
  const instance = getCurrentInstance()
  if (!instance) {
    console.error('\`useEmitAsProps\` must be used within a component setup')
    return result
  }

  const emits = instance.type.emits
  const events: TEventName[] = Array.isArray(emits)
    ? emits
    : typeof emits === 'object'
      ? Object.keys(emits)
      : []

  if (!events.length) {
    console.warn(
      `No emitted event found. Please check component: ${instance.type.__name}`,
    )
  }

  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    result[toHandlerKey(camelize(event))] = (...args: any[]) =>
      emit(event, ...args)
  }

  return result
}
