import { computed } from 'vue'
import { useEmitAsProps } from './useEmitAsProps'
import { useForwardProps } from './useForwardProps'

/**
 * The `useForwardPropsEmits` function takes in props and an optional emit function, and returns a
 * computed object that combines the parsed props and emits as props.
 * @param {T} props - The `props` parameter is an object that contains the props passed to a component.
 * It can be of any type, as specified by the generic `T extends Record<string, any>`.
 * @param [emit] - The `emit` parameter is a function that allows you to emit events from the
 * component. It takes two arguments: `name` (the name of the event) and `args` (optional arguments to
 * pass along with the event).
 * @returns The function `useForwardPropsEmits` returns a computed property that combines the parsed
 * props and emits as props.
 */
export function useForwardPropsEmits<T extends Record<string, any>, Name extends string>(props: T, emit?: (name: Name, ...args: any[]) => void) {
  const parsedProps = useForwardProps(props)
  const emitsAsProps = emit ? useEmitAsProps(emit) : {}

  return computed(() => ({
    ...parsedProps.value,
    ...emitsAsProps,
  }))
}
