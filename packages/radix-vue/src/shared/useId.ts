import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

const useGlobalState = createGlobalState(() => {
  const count = ref(0)
  return { count }
})

/**
 * The `useId` function generates a unique identifier based on a global count, with an optional
 * deterministic ID.
 * @param {string} [deterministicId] - The `deterministicId` parameter is an optional string that can
 * be passed to the `useId` function. If a `deterministicId` is provided, it will be returned as the
 * id. If no `deterministicId` is provided, a new id will be generated
 * @returns either the provided deterministicId if it exists, or a string in the format "radix-"
 * followed by the value of the count variable from the global state.
 */
export function useId(deterministicId?: string) {
  const { count } = useGlobalState()
  if (!deterministicId)
    count.value++

  return deterministicId || `radix-${count.value}`
}
