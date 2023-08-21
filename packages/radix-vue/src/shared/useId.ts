import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

const useGlobalState = createGlobalState(() => {
  const count = ref(0)
  return { count }
})

export function useId(deterministicId?: string) {
  const { count } = useGlobalState()
  if (!deterministicId)
    count.value++

  return deterministicId || `radix-${count.value}`
}
