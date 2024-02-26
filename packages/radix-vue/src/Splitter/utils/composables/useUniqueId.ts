import { nanoid } from 'nanoid/non-secure'

export default function useUniqueId(
  idFromParams: string | null = null,
) {
  return idFromParams ?? nanoid(6)
}
