import { nanoid } from 'nanoid/non-secure'
import { onServerPrefetch, ref } from 'vue'

export default function useUniqueId(
  idFromParams: string | null = null,
) {
  const id = ref(idFromParams ?? '')

  onServerPrefetch(() => {
    if (!id.value)
      id.value = nanoid(6)
  })

  if (!id.value)
    id.value = nanoid(6)

  return id
}
