import { useId } from '@/shared'
import { ref } from 'vue'

const wrappedUseId: () => string | null
  = typeof useId === 'function' ? useId : (): null => null

let counter = 0

export default function useUniqueId(
  idFromParams: string | null = null,
): string {
  const idFromUseId = wrappedUseId()

  const idRef = ref(idFromParams || idFromUseId || null)
  if (idRef.value === null)
    idRef.value = `${counter++}`

  return idFromParams ?? idRef.value
}
