import { computedWithControl } from '@vueuse/shared'
import { camelize, getCurrentInstance } from 'vue'

interface PropOptions {
  type?: any
  required?: boolean
  default?: any
}

/**
 * The `useForwardProps` function in TypeScript takes in a set of props and returns a computed value
 * that combines default props with assigned props from the current instance.
 * @param {T} props - The `props` parameter is an object that represents the props passed to a
 * component.
 * @returns The function `useForwardProps` returns a computed value that combines the default props,
 * preserved props, and assigned props.
 */
export function useForwardProps<T extends Record<string, any>>(props: T) {
  const vm = getCurrentInstance()
  // Default value for declared props
  const defaultProps = Object.keys(vm?.type.props ?? {}).reduce((prev, curr) => {
    const defaultValue = (vm?.type.props[curr] as PropOptions).default
    if (defaultValue !== undefined)
      prev[curr as keyof T] = defaultValue
    return prev
  }, {} as T)

  return computedWithControl(() => ({ ...props }), () => {
    const preservedProps = {} as T
    const assignedProps = vm?.vnode.props ?? {}

    Object.keys(assignedProps).forEach((key) => {
      preservedProps[camelize(key) as keyof T] = assignedProps[key]
    })

    // Only return value from the props parameter
    return Object.keys({ ...defaultProps, ...preservedProps }).reduce((prev, curr) => {
      if (props[curr] !== undefined)
        prev[curr as keyof T] = props[curr]
      return prev
    }, {} as T)
  })
}
